//Task 1
var changeColor = document.querySelectorAll('div.t1_colors');

//querySelectorAll returns a list so a loop is needed to make three box functional
for(var i = 0; i < changeColor.length;i++){
changeColor[i].addEventListener("mouseover", function() 
{
	document.querySelector('#task1').style.background = this.style.background;
});
changeColor[i].addEventListener("mouseout", function() 
{
	document.querySelector('#task1').style.background = 'white';
});
}



//Task 2
var moveIcon = document.querySelector('#task2control');
var count = 0;

moveIcon.addEventListener("click", function() 
{
	count++;

	//use a count to move the box back to the original place
	if (count%2 != 0)
	{
		document.querySelector('#chrome_browser').style.position = 'absolute';
		document.querySelector('#chrome_browser').style.top = '0';
		document.querySelector('#chrome_browser').style.right = '0';
	}
	else
	{
		document.querySelector('#chrome_browser').style.position = 'static';
	}
});


//Task 3
var changeTransparent = document.querySelector('#task3control');

changeTransparent.addEventListener("change", function() 
{
	//use some if statements to set the transparent to degree of the specified percentage
	if(this.value === "0%")
		document.querySelector('#tardis').style.opacity = '1';
	if(this.value === "10%")
		document.querySelector('#tardis').style.opacity = '0.9';
	if(this.value === "20%")
		document.querySelector('#tardis').style.opacity = '0.8';
	if(this.value === "30%")
		document.querySelector('#tardis').style.opacity = '0.7';
	if(this.value === "40%")
		document.querySelector('#tardis').style.opacity = '0.6';
	if(this.value === "50%")
		document.querySelector('#tardis').style.opacity = '0.5';
	if(this.value === "60%")
		document.querySelector('#tardis').style.opacity = '0.4';
	if(this.value === "70%")
		document.querySelector('#tardis').style.opacity = '0.3';
	if(this.value === "80%")
		document.querySelector('#tardis').style.opacity = '0.2';
	if(this.value === "90%")
		document.querySelector('#tardis').style.opacity = '0.1';
	if(this.value === "100%")
		document.querySelector('#tardis').style.opacity = '0';
});



//Task 4
var displayText = document.querySelector('#task4control');

//display the text entered
displayText.addEventListener("input", function() 
{
	document.querySelector('#output').textContent = this.value;
});

//clear when the focus is taken away
displayText.addEventListener("blur", function() 
{
	document.querySelector('#output').textContent = null;
	this.value = null;
});


//Task 5
var d = new Date();

//display the current time
document.querySelector('#time').textContent = ((d.getHours() < 10)?"0":"") + d.getHours() + ":" + ((d.getMinutes() < 10)?"0":"") + d.getMinutes() + ":" + ((d.getSeconds() < 10)?"0":"") + d.getSeconds();

//display if the second is evenly divisible by 5
if (d.getSeconds() %5 === 0)
	document.querySelector('#time').textContent = ((d.getHours() < 10)?"0":"") + d.getHours() + ":" + ((d.getMinutes() < 10)?"0":"") + d.getMinutes() + ":" + ((d.getSeconds() < 10)?"0":"") + d.getSeconds() + "  Break time!";




