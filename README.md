# Todo App using React

## Adding Todo

### 1).
First we created an object using constructor and super method. The object has two properties, one is an array and other is an empty string

### 2).
In the render function we have destructured the this.state object to get the properties todos and value

### 3).
We created a ul and inside we ran a map method on todos array. Map is a function that gives us two parameters item and index, item is the array element itself, and index is used in key as prop.

### 4).
Now to add todo to the array we have created an input text feild in which we called the onChange event handler. Inside the onChange we created an arrow function with target value. When this function is executed we will get text present inside text feild. (e) is the entire input text feild and we have targetted the value of text feild for that we have used e.target.value  

### 5).
Next we created a button with onCLick event that takes a function as a parameter. In the function we set the state by copying the element of array and adding the newly added todos to the array 
Then we emptied the text feild by creating an empty array of value

### Things that I forgot:-
In the input feild I forgot to put the value prop value={value}. This is an attribute of HTML input feild, which display a default text inside the feild. Over here we are using value as prop because we want to keep it empty 
In the input feild I forgot to place {value: e.target.value}.
In the add_todo function I forgot to use this.setState function. This is important to render the DOM 


## Removing Todo

### 1). 
Create button by the name of Delete and inside call the onClick event handler. Inside the event handler create another function by name of delete_todo. Inside the function pass the index as argument.

### 2). 
Inside the delete_todo function recieve index as parameter. Use splice() method to remove the element from the array. Inside the splice method pass two parameters one is index and other is a number that is the number of elements to remove, in our case we want to remove one element.


## Editing Todo
### 1).
Inside the object that we created on line 7 we are passing elements directly in todos array. Now we are going to change the structure of todos and make multiple object inside the array instead of elements

### 2).
In the ul we created a map method in which we called item, we will add the property of object i.e item.title

### 3). 
Now in the add_todo function we will create an object in which we passed title as property and its value is this.state.value, then we will pass the object as the second element of array todos inside setState 

### 4).  
We will create another property  inside our object that is present inside todos array. The property is of edit and takes a parameter of false as default  

### 5). 
In the map function we will update the javascipt. We will use if else statement that will check if item.edit is true show input text feild else show item.title

### 6).
Now I want that when I click on edit button the edit property inside the array becomes true and displays an input text feild. FIrst I will pass item.title in the edit_todo function as argument and call the this.state.todos[index].edit = true this will convert the edit property to true and then call the setState to update the state with the edit value. 
Second I want that when the user clicks on the edit button the name of the button is changed to update. So for this I will create a if else statement right before the first one and create another button of update. If the if else statement is true Update button will be returned other wise Edit button is  displayed

### 7).
For the functionality of Update button I will create another poperty inside the state object by the name of edit_value with a value of empty string 

### 8).
For rest of the steps watch class# 28 from the middle till 1:20:00

# Firebase Services in React App

### Installing Firebase to React App
npm install firebase

### Create a file in React 
Create a folder by name of config. Create a file init firebase.js

### Import firebase to the file
import * as firebase from 'firebase';

### Add app to firebase
Go to your firebase project and click on add app then register you app

### Adding the SDN to React
Copy the code from firebaseConfig line to initializeApp and paste it in the file

### Specify the service you want to use
Below the import firebase line import the service that you want to use
import 'firebase/database'; OR
import 'firebase/auth;

### Sending data to firebase
Import firebase from the file that you created. Inside the file where you created the add_todo function type the code for firebase database
firebase.database().ref('/').child("todos").push(obj)

obj is the object that you want to push to firebase
