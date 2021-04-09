const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

//CREATING ELEMENTS
const headerDiv = document.createElement('div')
const dateSpan = document.createElement('span')
const titleH1 = document.createElement('h1')
const tempSpan = document.createElement('span')

//CLASSES
headerDiv.classList.add(`header`)
dateSpan.classList.add(`date`)
tempSpan.classList.add(`temp`)

//ASSIN VALUE
dateSpan.textContent = date;
titleH1.textContent = title;
tempSpan.textContent = temp;

//APENDING
headerDiv.appendChild(dateSpan)
headerDiv.appendChild(titleH1)
headerDiv.appendChild(tempSpan)

return headerDiv;
}



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  console.log(selector)
  const headerSelector = document.querySelector(selector)
 headerSelector.appendChild(Header("Lambda News", "09 April 2021", "55 Degre"))

}

export { Header, headerAppender }
