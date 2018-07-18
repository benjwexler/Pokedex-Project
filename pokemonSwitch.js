// const multiplyES6 = (x, y) => { return x * y };

let initiate = () => {
    let mainScreenParent = document.getElementById("mainScreenParent");
    mainScreenParent.style.display="inline";
    let btn = document.getElementById("start");
    btn.style.display="none";
    let prev=document.getElementById("prev");
    prev.style.display="inline";
    let next=document.getElementById("next");
    next.style.display="inline";
}

setTimeout(initiate, 1200)