const target = document.getElementById('target')
var array = new Array(4584).fill(undefined).map((_,index)=> {
    var style = (Math.random() < .4) ? {visibility:'hidden'} : {};
    return <div key={index} style={style}/>

});
ReactDOM.render(array, target);