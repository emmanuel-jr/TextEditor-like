/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
updateText = () => {
  // CODE GOES HERE
  let myText = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = myText;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
makeBold = (elem) => {
  //CODE GOES HERE
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
makeUnderline = (elem) => {
    //CODE GOES HERE
  elem.classList.toggle('active');

  document.getElementById('text-output').classList.contains('underline') ?
  document.getElementById('text-output').classList.remove('underline') : 
  document.getElementById('text-output').classList.add('underline');
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
alignText = (elem, alignType) => {
  // CODE GOES HERE
  elem.classList.toggle('active');
  document.getElementById('text-output').style.textAlign = alignType;

  //let btnList = document.getElementsByClassName('align');    //HTMLCollectiion
  /*
  Array.from(btnList).forEach(el => el.classList.remove('active'));
  OR 
  for (let el of btnList) {
  el.classList.remove('active');
  } 
  */

  let btnList = document.querySelectorAll('align');
  btnList.forEach(el => el.classList.remove('active'));

  elem.classList.add('active');
}