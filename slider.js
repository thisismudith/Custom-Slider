let stylesheetText = `
#slider-container{
    --value: 0;
    --track-width: 0%;
    --slider-transition: 0s;
    width: 100%;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
}
#slider{
    -webkit-appearance: none;
    appearance: none;
    height: 16px;
    width: 100%;
    margin : 0;
    padding: 0;
    background: #00000000;
    outline: none;
    z-index: 99;
}
#slider-track{
    position: absolute;
    left: 0%;
    width: 100%;
    height: 8px;
    border-radius: 0.25rem;
    background: var(--slider-track-color);
    overflow: hidden;
}
#slider-track::before{
    position: absolute;
    content: "";
    left: 0;
    top : 0;
    width: var(--track-width);
    height: 100%;
    background: var(--slider-fill-color);
    transition: background var(--slider-transition);
    transform-origin: 100% 0%;
    transform: translateX(calc( var(--value) * 100% )) scaleX(1.2);
}
#slider::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    width : var(--thumb-width);
    height: var(--thumb-height);
    border-radius: 1px;
    background: var(--slider-thumb-color);
    cursor: ew-resize;
    z-index: 99;
    transition: border-color 300ms ease-out;
}
#value{
    text-align: center;
    font-family: "Poppins", sans-serif;
}
`;
class customSlider extends HTMLElement{
    constructor(){
        super();
        this.min   = parseFloat(this.getAttribute("min"))               || 0;
        this.value = parseFloat(this.getAttribute("value"))             || this.min;
        this.max   = parseFloat(this.getAttribute("max"))               || 100;
        this.step  = parseFloat(this.getAttribute("step"))              || 1;
        this.width = parseFloat(this.getAttribute("width"));
        this.height = parseFloat(this.getAttribute("height"))           || 18;
        this.thumbWidth = parseFloat(this.getAttribute("thumbWidth"))   || 8;
        this.thumbHeight = parseFloat(this.getAttribute("thumbHeight")) || this.height+7;
        this.thumbColor = checkColor(this.getAttribute("thumbColor"),"#EDEDEE");
        this.textColor = checkColor(this.getAttribute("textColor"),"#0084c2");
        this.fillColor = checkColor(this.getAttribute("fillColor"),"#0084c2");
        this.trackColor = checkColor(this.getAttribute("trackColor"),"#494949");
        this.doneColor = checkColor(this.getAttribute("doneColor"),"#129112");
        var thisSlider = document.querySelector("custom-slider")
        this.widthP = tryCatch(()=>{return thisSlider.getAttribute("width").includes("%")}, ()=>{return false})
        this.heightP = tryCatch(()=>{return thisSlider.getAttribute("height").includes("%")}, ()=>{return false})
        this.thumbWidthP = tryCatch(()=>{return thisSlider.getAttribute("thumbWidth").includes("%")}, ()=>{return false})
        this.thumbHeightP = tryCatch(()=>{return thisSlider.getAttribute("thumbHeight").includes("%")}, ()=>{return false})
        this.transition = thisSlider.getAttribute("transition");
        this.style.position = "relative";
        this.root = this.attachShadow({mode:"open"});
        this.dragging = false;
        this.create();
        this.update();
    }

    create(){
        let slider   = document.createElement("input");
        let sliderContainer = document.createElement("div");
        let sliderTrack = document.createElement("div");
        let value = document.createElement("div");
        let style = document.createElement("style");
        if (this.transition){
            if (/^\d+(.\d+)?s$/.test(this.transition)) sliderContainer.style.setProperty('--slider-transition', this.transition);
            else if (/^\d+(.\d+)?$/.test(this.transition)) sliderContainer.style.setProperty('--slider-transition', this.transition+"s");
            else console.log(`Invalid transition "${this.transition}" provided. Disabled transition.`);
            if (this.hasAttribute("showValue")) value.style.transition = "color "+this.transition;
        };
        style.innerHTML = stylesheetText;
        slider.type = "range";
        slider.id = "slider";
        slider.min = this.min;
        slider.max = this.max;
        slider.step = this.step;
        slider.value = this.value;
        sliderContainer.id = "slider-container";
        sliderTrack.id = "slider-track";
        if (this.width){
            if (this.widthP){
                sliderTrack.style.width = this.width+"%";
                sliderContainer.style.width = this.width+"%";
                value.style.width = this.width+"%";
            }else{
                sliderTrack.style.width = this.width-1+"px";
                sliderContainer.style.width = this.width+"px";
                value.style.width = this.width+"px";
            };
        };
        if (this.heightP) sliderTrack.style.height = this.height+"%";
        else sliderTrack.style.height = this.height+"px";
        if (this.thumbWidthP) this.style.setProperty("--thumb-width", this.thumbWidth+"%")
        else this.style.setProperty("--thumb-width", this.thumbWidth+"px")
        if (this.thumbHeightP) this.style.setProperty("--thumb-height", this.thumbHeight+"%");
        else this.style.setProperty("--thumb-height", this.thumbHeight+"px");
        value.id = "value";
        slider.addEventListener("input",this.update.bind(this));
        sliderContainer.style.setProperty("--slider-thumb-color", this.thumbColor);
        sliderContainer.style.setProperty("--slider-fill-color", this.fillColor);
        sliderContainer.style.setProperty("--slider-track-color", this.trackColor);
        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(sliderTrack);
        this.root.appendChild(style);
        this.root.appendChild(sliderContainer);
        this.root.appendChild(value);
    }
    update(){
        let track  = this.root.getElementById("slider-container");
        let slider = this.root.getElementById("slider");
        let text = this.root.getElementById("value");
        text.style.marginTop = this.height/2+"px";
        var value;
        if (!this.hasAttribute("hideValue")) value = this.root.getElementById("value");
        if (slider.value == this.max){
            track.style.setProperty('--slider-fill-color', this.doneColor);
            if (value) text.style.color = this.doneColor;
        }else{
            track.style.setProperty('--slider-fill-color', this.fillColor);
            if (value) text.style.color = this.textColor;
        };
        let percent = (slider.value-this.min)/(this.max-this.min) * 100;
        if (value) value.innerText = slider.value;
        this.setAttribute("rangeValue", slider.value);
        track.style.setProperty("--track-width", percent+"%");
    };
};
function tryCatch(_try,_catch){try{return _try.call()}catch{return _catch.call()}}
function checkColor(clr, clrDefault){
    const s = new Option().style;
    s.color = clr;
    if (s.color !== '') return clr
    else return clrDefault;
}
customElements.define('custom-slider', customSlider);
