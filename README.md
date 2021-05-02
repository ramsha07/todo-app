# Todo App using React

## 1).
First we created an object using constructor and super method. The object has two properties, one is an array and other is an empty string

## 2).
In the render function we have destructured the this.state object to get the properties todos and value

## 3).
We created a ul and inside we ran a map method on todos array. Map is a function that gives us two parameters item and index, item is the array element itself, and index is used in key as prop.

## 4).
Now to add todo to the array we have created an input text feild in which we called the onChange event handler. Inside the onChange we created an arrow function with target value. When this function is executed we will get text present inside text feild. (e) is the entire input text feild and we have targetted the value of text feild for that we have used e.target.value  

## 5).
Nex we created a button with onCLick event that takes a function as a parameter. In the function we set the state by copying the element of array and adding the newly added todos to the array 
Then we emptied the text feild by creating an empty array of value

## Things that I forgot:-
In the input feild I forgot to put the value prop value={value}. This is an attribute of HTML input feild, which display a default text inside the feild. Over here we are using value as prop because we want to keep it empty 
In the input feild I forgot to place {value: e.target.value}.
In the add_todo function I forgot to use this.setState function. This is important to render the DOM 