<script>
import {onMount} from 'svelte';

let dynamicData = [];
let rate = 0;

let scrollContainer;

let inputVal;
$: outputval = inputVal? inputVal * rate: "";

onMount(async () => {
		const response = await fetch('http://localhost:3000/');
  		const data = await response.json();
        console.log(data)
  		dynamicData = (data);
        rate = 42635
	});

let selectedOption = "bitcoin";
let newOption = "usd";

function addContent(event){
    inputVal = event.target.value.replace(/[^0-9.]/g, '');
    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
}

async function getRate(){
    let oldValue = document.getElementById("selCurr").value;
    let newValue = document.getElementById("newCurr").value;
    console.log(oldValue);
    console.log(`New value is: ${newValue}`);
    const response = await fetch(`http://localhost:3000/convert/${oldValue}/${newValue}`);
  	const data = await response.json();
    console.log(data);
    rate = data;
}

</script>
<div class="container">
    <form method="post">
        <div class="swap">
            <div id="arrow-container">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                id="arrow"
                >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </div>
            <div class="swap-section">
                <div class="left">
                    <h4>You pay</h4>
                    <input id="input" required autocomplete="off" placeholder="0" bind:value={inputVal} on:input={addContent}>
                </div>  
                <select name="selected-currency" id="selCurr" bind:value={selectedOption} on:change={getRate}>
                    {#each dynamicData as curr}
                        <option value={curr.id}>
                            {curr.name}
                        </option>
                    {/each}
                </select> 
            </div>
            <div class="swap-section">
                <div class="left">
                    <h4>You receive</h4>
                    <div class="output" contenteditable="true" bind:innerText={outputval} bind:this={scrollContainer}></div>
                </div>  
                <select name="new-currency" id="newCurr" bind:value={newOption} on:change={getRate}>
                    {#each dynamicData as curr}
                        <option value={curr.vs_currency}>
                            {curr.name}
                        </option>
                    {/each}
                </select> 
            </div>
        </div>
</form>
</div>

<style>
*{
    color: #5e5e5e;
}


input{
    background-color: #1b1b1b;
    color: #ffffff;
    border-radius: 20px;
    width: 300px;
    height: 70px;
    font-size: 30px;
    border: none;
}
input:focus{
    outline: none;
}

select{
    background-color: #161616;
    height: 40px;
    width: 80px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 15px;
    color: #ffffff;
    font-weight: 800;
    margin-left: 40px;
    padding-left: 5px;
}

option{
    font-size: 15px;
    color: #ffffff;
    background-size: cover;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #161616;
  width: 500px;
  border-radius: 20px;
  box-shadow: 1px 1px 10px  #8d29d1;
  padding: 10px 20px 10px 20px;
  
}
.swap-section{
    background-color: #1b1b1b;
    height: 150px;
    width: 500px;
    border-radius: 20px;
    margin: 9px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
}

.swap-section:hover{
    box-shadow: 1px 1px 4px #5e5e5e;
}

.left{
    margin-bottom: 60px;
}

#arrow-container{
    position: absolute;
    border: 7px solid #161616;
    background-color: #1b1b1b;
    border-radius: 10px;
    top: 40.5%;
    right: 48%;
    height: 30px;
    padding: 2px;
}
.button{
    display: flex;
    justify-content: center;
}

.output{
    width: 300px;
    font-size: 30px;
    color: #ffffff;
    overflow: auto;
    text-wrap: nowrap;
    outline: none;
}

.output::-webkit-scrollbar{
    display: none;
    cursor: not-allowed;
    pointer-events: none;
}


</style>