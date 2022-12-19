var min, value;
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
    height: var(--track-height);
    border-radius: var(--track-radius);
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
    border-radius: var(--thumb-radius);
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
        this.min   = parseFloat(this.getAttribute("min")) || 0;
        min = this.min
        this.value = getVal(this);
        this.prevValue = this.value;
        this.max   = parseFloat(this.getAttribute("max")) || 100;
        this.step  = parseFloat(this.getAttribute("step")) || 1;
        this.width = parseFloat(this.getAttribute("width"));
        this.height = parseFloat(this.getAttribute("height")) || 18;
        this.trackRadius = parseFloat(this.getAttribute("trackRadius")) || 4;
        this.thumbRadius = parseFloat(this.getAttribute("thumbRadius")) || 1;
        this.thumbWidth = parseFloat(this.getAttribute("thumbWidth")) || 8;
        this.thumbHeight = parseFloat(this.getAttribute("thumbHeight")) || this.height+7;
        this.thumbColor = checkColor(this.getAttribute("thumbColor"),"#EDEDEE");
        this.textColor = checkColor(this.getAttribute("textColor"),"#0084c2");
        this.fillColor = checkColor(this.getAttribute("fillColor"),"#0084c2");
        this.trackColor = checkColor(this.getAttribute("trackColor"),"#494949");
        this.doneColor = checkColor(this.getAttribute("doneColor"), this.fillColor);
        this.transition = this.getAttribute("transition");
        this.smooth = parseFloat(this.getAttribute("smooth")) || 0;
        this.changeFunc = this.getAttribute("onchange") || null;
        if (this.hasAttribute("smooth")) this.step = smooth(this.max-this.min, this.smooth)
        else if (((this.max-this.min)/this.step)%1 != 0){
            if (this.hasAttribute("forceContinue")) console.log('Values entered are not proportional. Reset was not applied since you passed "forceContinue".\nNote: This might cause the slider to never reach the max value')
            else{
                console.log("Values entered are not proportional. Nearest reset was applied!")
                this.step = getFactors(this.max-this.min,this.step)
            }
        }
        var thisSlider = document.querySelector("custom-slider")
        this.widthP = tryCatch(()=>{return thisSlider.getAttribute("width").includes("%")}, ()=>{return false});
        this.heightP = tryCatch(()=>{return thisSlider.getAttribute("height").includes("%")}, ()=>{return false});
        this.thumbWidthP = tryCatch(()=>{return thisSlider.getAttribute("thumbWidth").includes("%")}, ()=>{return false});
        this.thumbRadiusP = tryCatch(()=>{return thisSlider.getAttribute("thumbRadius").includes("%")}, ()=>{return false});
        this.thumbHeightP = tryCatch(()=>{return thisSlider.getAttribute("thumbHeight").includes("%")}, ()=>{return false});
        this.trackRadiusP = tryCatch(()=>{return thisSlider.getAttribute("trackRadius").includes("%")}, ()=>{return false});
        this.style.position = "relative";
        this.root = this.attachShadow({mode:"open"});
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
        percentPixel(this, this.heightP, "--track-height", this.height)
        percentPixel(this, this.thumbWidthP, "--thumb-width", this.thumbWidth)
        percentPixel(this, this.thumbHeightP, "--thumb-height", this.thumbHeight)
        percentPixel(this, this.thumbRadiusP, "--thumb-radius", this.thumbRadius)
        percentPixel(this, this.trackRadiusP, "--track-radius", this.trackRadius)
        value.id = "value";
        slider.addEventListener("input",this.update.bind(this));
        this.style.setProperty("--slider-thumb-color", this.thumbColor);
        this.style.setProperty("--slider-fill-color", this.fillColor);
        this.style.setProperty("--slider-track-color", this.trackColor);
        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(sliderTrack);
        this.root.appendChild(style);
        this.root.appendChild(sliderContainer);
        this.root.appendChild(value);
    }
    update(){
        let track  = this.root.getElementById("slider-container");
        let slider = this.root.getElementById("slider");
        this.setAttribute("sliderValue", slider.value);
        if (this.changeFunc){
            var func = this.changeFunc.split("(")[0]
            var args = this.changeFunc.replace(func, "")
            if (slider.value != this.prevValue) eval(func).apply(this, parseTuple(args));
        }
        this.prevValue = slider.value;
        let text = this.root.getElementById("value");
        text.style.marginTop = this.height/2+"px";
        var sliderValue;
        sliderValue = this.root.getElementById("value");
        if (this.hasAttribute("hideValue")) sliderValue.style.display = "none";
        else sliderValue.style.display = "";
        if (slider.value == this.max){
            track.style.setProperty('--slider-fill-color', this.doneColor);
            if (sliderValue){
                text.style.color = this.doneColor;
                text.style.fontWeight = "bold";
            }
        }else{
            track.style.setProperty('--slider-fill-color', this.fillColor);
            if (sliderValue){
                text.style.color = this.textColor;
                text.style.fontWeight = "normal";
            }
        };
        let percent = (slider.value-this.min)/(this.max-this.min) * 100;
        if (sliderValue) sliderValue.innerText = slider.value;
        value = parseFloat(slider.value);
        track.style.setProperty("--track-width", percent+"%");
    };
    get val(){return parseFloat(this.getAttribute("sliderValue"))};
};
function tryCatch(_try,_catch){try{return _try.call()}catch{return _catch.call()}}
function checkColor(clr, clrDefault){
    const s = new Option().style;
    s.color = clr;
    if (s.color !== '') return clr
    else return clrDefault;
}
function getVal(elm){
    var tempVal = parseFloat(elm.getAttribute("value"))
    if (!tempVal && tempVal != 0) return min
    else return tempVal
}
function percentPixel(elm, bool, prop, val){
    if (bool) elm.style.setProperty(prop, val+"%")
    else elm.style.setProperty(prop, val+"px")
}
customElements.define('custom-slider', customSlider);
function getFactors(num, close=null, min=true, extraSmall=false){
    var decShifts;
    if (/\.+/.test(num.toString())) decShifts = num.toString().split('.').at(-1).length
    var divisor = parseInt(`1${'0'.repeat(decShifts)}`)
    var res = {};
    num = parseFloat(num.toString().replace('.',''))
    if (num == 1) return [num/100]
    for(let i = 1; i < num; i++) {
        if(num % i == 0) {
            if (!close && close != 0){
                if (extraSmall){
                    if (!decShifts) decShifts = 0;
                    divisor = parseInt(`1${'0'.repeat(decShifts+1)}`)
                    res[i/divisor] = i/divisor
                }
                else res[i/divisor] = i/divisor
            }
            else{
                if (decShifts) res[i/divisor] = Math.abs(close-i/divisor);
                else res[i] = Math.abs(close-i);
            }
        }
    }
    if (min) return parseFloat(Object.keys(res).find(key => res[key] === Math.min.apply(null,Array.from(Object.values(res)))));
    else return Object.values(res)
}
function smooth(range, count=null){
    if (range < 100) var factors = getFactors(range, null, false, true)
    else var factors = getFactors(range, null, false)
    var factorsCount = factors.map(n => range/n)
    if (count){
        if (factorsCount.includes(count)) return factors[factorsCount.indexOf(count)]
        else{
            var closestCount = factorsCount.map(n => n-count);
            for (i of closestCount) if (i < 0) closestCount[closestCount.indexOf(i)] = Infinity
            return factors[closestCount.indexOf(Math.min.apply(null,closestCount))]
        }
    }else return factors[factorsCount.indexOf(Math.max.apply(null, factorsCount))]
}
function parseTuple(t) {
    var items = t.replace(/^\(|\)$/g, "").split("),(");
    items.forEach(function(val, index, array) {
       array[index] = val.split(",");
    });
    return items[0];
}