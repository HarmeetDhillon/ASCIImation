"use strict";
var FileText;
var CurrentFrame;
var FrameCount;
var FrameDelay;

// Below Method is  called to start the animation when we press Start Button
function StartAnimation()
{
	FileText = document.getElementById("textbox").value; //save the contents of the textarea  
	CurrentFrame = FileText.split("=====\n"); //spilt the textarea into frames
	
	if(CurrentFrame.length <= 1)
	{
		alert("OOPS!! Select The Animation From The DropDown.. ");
		return;
	}
	
	SetEnable(true); //this will enable the stop button 
	FrameCount = 0; // set counter to 0 so that every time it is initialized to zero when we select start button.
	GetFrame(); // method to retrive the next frame
	FrameDelay = window.setInterval(GetFrame, 250); // this will set the frame time interval.
}

// Below Method is called to get the next frame.
function GetFrame()
{
	document.getElementById("textbox").value = CurrentFrame[FrameCount];
	FrameCount = (FrameCount + 1) % CurrentFrame.length; 
}

// Below Method is  called to stop the animation when we press Stop Button
function StopAnimation()
{
	clearTimeout(FrameDelay);
	FrameDelay = null;
	document.getElementById("textbox").value = FileText;
	SetEnable(false); // this will disable the stop button 
}

// Below Method is  called to disable and enable the controls
function SetEnable(Value)
{
	document.getElementById("textbox").readOnly = Value;
	document.getElementById("Animation").disabled = Value; 
	document.getElementById("Stop").disabled =! Value;
	document.getElementById("Start").disabled = Value;
	document.getElementById("turbo").disabled =! Value;
	document.getElementById("turbo").checked =! Value;
		
}

// Below Method is  called to Select the animation and get the text into the text area
function SelectAnimation()
{
	var whichOne = document.getElementById("Animation").value;
	document.getElementById("textbox").value = ANIMATIONS[whichOne];
	
}

// Below Method is  called to Select the size of the text
function SelectSize()
{
	var SizeChosen = document.getElementById("Size").value;
	(document.getElementById("textbox")).style.fontSize = SizeChosen;
	
}

// Below Method is  called when we want to increase the speed of changing of frames.
function SelectTurbo()
{
	var Delay = 50;
	if (document.getElementById("turbo").checked)
	{
		Delay = document.getElementById("turbo").value;
	}
	else
	{
		Delay = 250;
	}
	if(FrameDelay !== null)
	{
		window.clearInterval(FrameDelay);
		FrameDelay = window.setInterval(GetFrame, Delay);
	}
}
