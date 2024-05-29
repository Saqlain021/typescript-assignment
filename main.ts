// 1. Install Node.js, TypeScript and VS Code on your computer.(alreaday done)
console.log("Question 1:")
console.log("already done.")

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("\nQuestion 2:")

let name1:string="Eric";
console.log("Hello "+name1+", would you like to learn some typescript today?" )  

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("\nQuestion 3:")

let name2:string="Saqlain ali shah";
console.log("in lower case:",name2.toLowerCase());
console.log("in upper case:",name2.toUpperCase());

//there is not any titlecase in string method so we have to do it by overselves

function toTitleCase (str:string){                                  //here i made a function in which one parameter pases 
   let str1:string[]= str.toLowerCase().split(" ")                           // i made new variable in which we give argument it will conert it into lower case and split it by space it will be stor in the variable as an array 
   for (let i=0; i<str1.length; i++){                               //here i make an object which is connect to an array   
    str1[i]=str1[i].toUpperCase().charAt(0).concat(str1[i].slice(1))        //here  it will convert fisrt element 0 index in upper case   and concat it with remain character 
   }
   let  str2:string=str1.join(" ")                                                 //it will join the array by space and convert to string        
   return str2                                                   
} 
let res=toTitleCase(name2)                                                    //stroe a func in variable
console.log("in title case:",res)                                             //print   

// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("\nQuestion 4:")

console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\" ")

// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("\nQuestion 5:")

let famous_person:string="Albert Einstein";
let message:string=" once said, \"A person who never made a mistake never tried anything new.\""
console.log(famous_person+message)

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
console.log("\nQuestion 6:")
let name3:string="\tAlbert Einstein.";
let name4:string="Albert\nEinstein.";
let name5:string="Albert Einstein."
console.log(name3)
console.log(name4)
console.log(name5)

// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// 8. You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("\nQuestion 7 and 8:")

console.log("addition of 6 and 2:",6+2);
console.log("subtraction of 10 and 2:",10-2);
console.log("multplication of 4 and 2:",4*2);
console.log("division of 16 and 2:",16/2);

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("\nQuestion 9:")

let num1:number=8;
let message2:string="The number "+ num1 +" is considered to be a lucky number in Chinese and other Asian cultures."
console.log(message2)

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("\nQuestion 10: done") 

// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\nQuestion 11:")
let names=["wahaj","talha","salik","shahid"];
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\nQuestion 12:")

console.log(names[0]+" is a friend from university ")
console.log(names[1]+" is a friend from university ")
console.log(names[2]+" is a friend from university ")
console.log(names[3]+" is a friend from university ") 
// OR
// for (let a of names){
//     console.log(a," is a friend from uni")
// }

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\nQuestion 13:")

let my_array:string[]=["bike","laptop","watch"];
console.log("i would like to own a " +my_array[0]+ ".");
console.log("inshallah, i will buy a dell "+my_array[1]+" in future.");
console.log("i like to wear a "+my_array[2]+".")

//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\nQuestion 14:");

let invitation_to:string[]=["wahaj","talha","salik"];
console.log("Dear " +invitation_to[0]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[1]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[2]+ ", I like to invite you to dinner with me tonight at my home.")

//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("\nQuestion 15:");
console.log(invitation_to[2]+" can't make the dinner.")
invitation_to[2]="ijtaba"
console.log("Dear " +invitation_to[0]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[1]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[2]+ ", I like to invite you to dinner with me tonight at my home.")

//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("\nQuestion 16:");
console.log("i like to inform to you all that i have arrage bigger table so i am invition other friends also.")

invitation_to.unshift("shahid")


invitation_to.splice(2,0,"salman")


invitation_to.push("mustajab")

console.log("Dear " +invitation_to[0]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[1]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[2]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[3]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[4]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[5]+ ", I like to invite you to dinner with me tonight at my home.")

//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("\nQuestion 17:");
console.log("Sorry to say that guys, the table that i arrage can't come on time therefore i can only two freinds.")
let pop1=invitation_to.pop()
console.log("i am sorry " +pop1+ ", you are not invited to the dinner.")
let pop2=invitation_to.pop()
console.log("i am sorry " +pop2+ ", you are not invited to the dinner.")
let pop3=invitation_to.pop()
console.log("i am sorry " +pop3+ ", you are not invited to the dinner.")
let pop4=invitation_to.pop()
console.log("i am sorry " +pop4+ ", you are not invited to the dinner.")
console.log("remaining element in an array:",invitation_to)
console.log("Dear " +invitation_to[0]+ ", I like to invite you to dinner with me tonight at my home.")
console.log("Dear " +invitation_to[1]+ ", I like to invite you to dinner with me tonight at my home.")
// OR{
// invitation_to.pop(0)
// invitation_to.pop(0)
// console.log(invitation_to)}

invitation_to.splice(0,2)
console.log(invitation_to)

//18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nQuestion 18:")
let world_tour:string[]=["japan","switzerland","turkey","italy","germany"];
console.log("original array:",world_tour)
let sorted:string[] =world_tour.toSorted()
console.log("sorted array:",sorted)
console.log("original array:",world_tour)
let reversed:string[]=world_tour.sort().toReversed()
console.log("revered array:",reversed) 
console.log("original array:",world_tour)
world_tour.reverse()
console.log("original array reverse:",world_tour)
world_tour.reverse()
console.log("original array reverses again to attend its original state :",world_tour)
world_tour.sort()
console.log("orginal array into sort:",world_tour)
world_tour.reverse()
console.log("orginal array covert into reverse alphabet order:",world_tour)




//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("\nQuestoin 19:");
let invitation_to1:string[]=["wahaj","talha","salik"];
console.log("i am inviting",invitation_to1.length,"people in my dinner party." )


//20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\nQuestion 20");
let list_countries:string[]=["pakistan","england","france","germany"]
console.log(list_countries)


//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\nQuestion 21:");
type obtype={name:string,age:number,class:string}
let object:obtype ={name:"saqlain",
   age:23,
   class:"monday seven to ten"
}
console.log(object)
console.log(object["name"])
console.log(object["age"])
console.log(object["class"])

//22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

console.log("\nQuestion 22:");
type obtype1={name:string,age:number,class:string}
let object1:obtype1 ={name:"saqlain",age:23,class:"monday seven to ten"
}//forget to use colon in after key or forget to use " , " 
console.log(object)
console.log(object["name"])
console.log(object["age"])
console.log(object["class"])

//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("\nQuestion 23:");
let bike:string="kawasaki H2";
let mountain:string="Everest";
let laptop="Dell";
let name:string="Saqlain";
let idNumber:number=123
console.log(bike=="kawasaki H2");
console.log(mountain=="Everest");
console.log(laptop=="Dell");
console.log(name=="Saqlain");
console.log(idNumber==123);
console.log(bike=="Yamaha R1");
console.log(mountain=="K2");
console.log(laptop=="hp");
console.log(name=="Amjad");
console.log(idNumber==321);
// //24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
console.log("\nQuestion 24:");
let cityInSindh:string="Karachi";
let cityInPunjab:string="Lahore";
if (cityInSindh=="Karachi"){
   console.log("yes, that is true.")

}
else{"no, that us not true."};


if(cityInPunjab!="Karachi"){
   console.log("no, that not true")
}
else{console.log("yes, that is true.")};

let name_1:string="amjad";
let name_2:string="ebad";
if (name_1==name_2){
   console.log("yes it is not eual.")
}else{
   console.log("no, it is not equal")
};

let govDefAge:number=18
if(govDefAge==18){
   console.log("can have driving license")
};
if(govDefAge!=16){
   console.log("can't have driving license ")
};
if (govDefAge<16){
   console.log("can  have a driving license.")
}else{
   console.log("can not drive")
};
if(govDefAge>23){
console.log("can not drive")
}else{console.log("can drive")};
if(govDefAge<=24){
   console.log("can drive")
};
if(govDefAge>=16){
   console.log("can not drive")
};
if (govDefAge<=20 && govDefAge>=16){
   console.log("can vote")
};
if (govDefAge==18 || govDefAge!=18){
   console.log("can vote")
};


let list1:string[]=["pakistan","india","japan","france","switzerland"]
// console.log(list1.includes("japan"))
// console.log(list1.includes("england"))

// console.log(!list1.includes("india"))
// console.log(!list1.includes("germany"))

if(list1.includes("pakistan")){
   console.log("includes")
}else{console.log("not includes")};

if(list1.includes("england")){
   console.log("includes")
}else{console.log("not includes")};
if(!list1.includes("japan")){
   console.log("not include")
} else{console.log("includes")} ;

if(!list1.includes("germany")){
   console.log("not includes")
}else{console.log("not includes")};

//25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
console.log("\nQuestin 25:");
let alien_color1:string="green";
if(alien_color1=="green"){
   console.log("you have earned 5 points.")

};
if(alien_color1=="green"){
   console.log("you have earned 5 points.")

};
if(alien_color1=="red"){
   console.log("you have earned 5 points.")

}


//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
console.log("\nQuestoin 26:");
if (alien_color1=="green"){
   console.log("you just earned 5 point for shooting the alien.")
}
else {
   console.log("you just earned 10 points")
}
let alien_color ="red"
if (alien_color=="green"){
   console.log("you just earned 5 point for shooting the alien.")
}
else {
   console.log("you just earned 10 points")
}
//27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("\nQuestion 27:")
let alienColor="yellow"
console.log("1 version.")
if(alien_color1=="green"){
   console.log("you earned 5 point.")
}else if (alien_color1=="yellow"){
   console.log("you earned 10 points.")
}else if (alien_color1=="red"){
   console.log("you earned 15 point.")
}else{console.log("you din't make a point")}
console.log("2 version.")
if(alienColor=="green"){
   console.log("you earned 5 point.")
}else if (alienColor=="yellow"){
   console.log("you earned 10 points.")
}else if (alienColor=="red"){
   console.log("you earned 15 point.")
}else{console.log("you din't make a point")}
console.log("3 version.")
if(alien_color=="green"){
   console.log("you earned 5 point.")
}else if (alien_color=="yellow"){
   console.log("you earned 10 points.")
}else if (alien_color=="red"){
   console.log("you earned 15 point.")
}else{console.log("you din't make a point")}
// //28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
console.log("\nQuestion 28:");
let Age:number=67;
if (Age<2){
   console.log("the person is a baby.")
}
else if(Age==2 || Age<4){
   console.log("the person is a toddler.")
}
else if(Age==4 || Age<13){
   console.log("the person is a kid.")
}
else if(Age==13 || Age<20){
   console.log("the person is a teenager.")
}
else if(Age==20 || Age<65){
   console.log("the person is an adult.")
} else {
   console.log("the person is an elder")
}
//29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("\nQuestion 29:");
let favorite_fruits:string[]=["mango","orange","grapes"]
if(favorite_fruits.includes("mango")){
   console.log("i like",favorite_fruits[0])
};
if(favorite_fruits.includes("orange")){
   console.log("i like",favorite_fruits[1])
};
if(favorite_fruits.includes("grapes")){
   console.log("i like",favorite_fruits[2])
};
if(favorite_fruits.includes("banana")){
   console.log("i like banana",)
};
if(favorite_fruits.includes("apple")){
   console.log("i like apple")
};
//30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("\nQuestion 30:");
let userName:string[]=["admin","ebad","amjad","farjad","haris"];
for(let a of userName){
  if(a=="admin"){
      console.log("Hello" ,a,", would you like to see a status report?")
  }
  else{
   console.log("Hello",a,", thank you for logging in again")
  }
}
//31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("\nQuestion 31:")
if ( userName.length === 0){
   console.log("We need to find some users!")
}
else{
   for(let a of userName){
      if(a=="admin"){
          console.log("Hello" ,a,", would you like to see a status report?")
      }
      else{
       console.log("Hello",a,", thank you for logging in again")
      }
}}

userName=[]
if ( userName.length === 0){
   console.log("We need to find some users!")
}
else{
   for(let a of userName){
      if(a=="admin"){
          console.log("Hello" ,a,", would you like to see a status report?")
      }
      else{
       console.log("Hello",a,", thank you for logging in again")
      }
}}
//32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("\nQuestion 32:");

let current_user :string[]=["EBAD","Samad","mubashir","fouzaib","Haris"];
let new_user:string[]=["amna","Ebad","amjad","HARIS","Ubaid"];
let current_lower:string[]=current_user.map((i)=>{
   let ret=i.toLowerCase()
   return ret
})
for (let new_user1 of new_user){
    if(current_lower.includes(new_user1.toLowerCase())){
      console.log(`sorry username ${new_user1} is alreday assign`)

}
else{
   console.log(`username ${new_user1} can be available`)
}
}
//33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
console.log("\nQuestion 33:");
let ordinalNumber:number[]=[1,2,3,4,5,6,7,8,9];
for(let a of ordinalNumber){
   if(a==1){
      console.log(`${a}st`)
   }else if(a==2){
      console.log(`${a}nd`)
   }else if(a==3){
      console.log(`${a}rd`)
   }else{
   console.log(`${a}th`)}
}
//34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\nQuestion 34:");

let pizza:string[]=["peproni pizza","fajita pizza","tikka pizza"];
for(let a=0;a<pizza.length;a++){
   console.log(pizza[a])

}
for(let a of pizza){
   console.log(`i like, ${a}`)
}
console.log(`Pizza is an Italian food that was created in Italy. It is made with different toppings. Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil.\n`+`i really love pizza.`)
//35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\nQuestion 35:");

let animals:string[]=["cat","dog","parrot"];
for( let pet in animals){
   console.log(animals[pet]);
};
for( let pet of animals){
   console.log(`A ${[pet]} would make a great pet.`);
};
console.log("These animal would make a great pet.")
//36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log("\nQuestion 36:");

function make_shirt(size:string,message:string){
   console.log(`the size of the shirt is '${size}'\nthe message on the shirt is '${message}'\n`)
}
make_shirt("small","i love typescript")

//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("\nQuestion 37:")
make_shirt("large","i love typescript")
make_shirt("medium","i love typescript")
make_shirt("extra large","i love programming")
//38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("\nQuestion 38:");

function describe_city(city:string="Karachi",country:string="Pakistan"){
   console.log(`${city} is in ${country}`)
}
describe_city()
describe_city("\nBeijing","china");
describe_city("Berlin","Germany");
describe_city("Tokyo","Jpan");
//39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log("\nQuestion 39:");

function city_country(city:string,country:string){
   let result=console.log(`${city}, ${country}`);
   return result
}
city_country("lahore","pakistan\n")
city_country("Beijing","China")
city_country("Berlin","Germany")
city_country("Tokyo","Japan")
//40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("\nQuestion 40:");

function make_album(artist:string,title:string):{artist:String;title:string}{
   let dictionaries={
      artist:  artist.charAt(0).toUpperCase().concat(artist.slice(1)),
      title:  title.charAt(0).toUpperCase().concat(title.slice(1))
      
   }
   return dictionaries
}
let alubum_result1=make_album("michale jackson","dangerous")
let alubum_result2=make_album("justin beiber","never say never")
let alubum_result3=make_album("atif aslam","aadat")
let alubum_result4=make_album("ali zafar","ab khel jamay ga")
console.log(alubum_result1)
console.log(alubum_result2)
console.log(alubum_result3)
console.log(alubum_result4)


//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("\nQuestion 41:");
let magician:string[]=["Derren Brown","David Copperfield","Harry Houdini","Harry Anderson"]
function show_magicians(magicians:string[]){
   for(let i of magicians){
      console.log(i)
   }
}
show_magicians(magician)
//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log("\nQuestion 42:");

function make_great(magicians:string[]){
   for(let i=0;i<magicians.length;i++){
      magicians[i]=magicians[i].concat(" is great")
      console.log(magicians[i])
   }
}

make_great(magician)
show_magicians(magician)
//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("\nQuestion 43:");

function make_great2(magicians:string){
   let great:string[]=[];
   for(let i=0;i<magicians.length;i++){
      great.push(magicians[i].concat(" is great"))
      
   }
   return great
}

let magician1:string[]=["Derren Brown","David Copperfield","Harry Houdini","Harry Anderson"]
let great1:string[]=make_great2(magician1)
show_magicians(great1)
show_magicians(magician1)
//44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("\nQuestion 44:");
function sandwich(...provide:string[]):string[]{
   console.log("ordered sandwiiches")
   for(let i=0;i<provide.length;i++){
      console.log(`=>${provide[i]}`)
   }console.log("enjoy\n")
}
sandwich("potatos","chicken pieces","eggs")
sandwich("tomato","beef","eggs")
sandwich("cheese","chicken pieces","mayo","ketchup")
//45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("\nQuestion 45:");
function cars(manufacturer:string,model_name:string,optional:any):{manufacturer:string,model_name:string,optional:any}{
   let car_detail={
      manufacturer:manufacturer.toUpperCase(),
      model_name:model_name.toUpperCase(),
      ...optional

   }
   return car_detail
}
let car_result1=cars("toyota","yaris",{color:"white",year:2020,assemble_in:"pakistan"})
let car_result2=cars("bmw","iX M60",{color:"black",year:2023,assemble_in:"germany"})
let car_result3=cars("honda","civic",{color:"red",year:2024,assemble_in:"pakistan"})
console.log(car_result1)
console.log(car_result2)
console.log(car_result3)
console.log("\nDONE")