## Introduction 

Same types of objects are typically implemented by class in object oriented programming. As the structural unit of the system can be represented through the classes, so, it is very important to identify the classes before start implementing all the logical flows of the system.

In this experiment we will learn how to identify the classes from a given problem statement.

 

## Theory

### Domain Class
In Object Oriented paradigm Domain Object Model has become subject of interest for its excellent problem comprehending capabilities towards the goal of designing a good software system. Domain Model, as a conceptual model gives proper understanding of problem description through its highly effective component – the Domain Classes. Domain classes are the abstraction of key entities, concepts or ideas presented in the problem statement [4]. As stated in [5], domain classes are used for representing business activities during the analysis phase.

Below we discuss some techniques that can be used to identify the domain classes.

### Traditional Techniques for Identification of Classes

#### **Grammatical Approach Using Nouns**
This object identification technique was proposed by Russell J. Abbot, and Grady Booch made the technique popular. This technique involves grammatical analysis of the problem statement to identify list of potential classes. The logical steps are:

1. Obtain the user requirements (problem statement) as a simple, descriptive English text. This basically corresponds to the use-case diagram for the problem statement.
2. Identify and mark the nouns, pronouns and noun phrases from the above problem statements
3. List of potential classes is obtained based on the category of the nouns (details given later). For example, nouns that direct refer to any person, place, or entity in general, correspond to different objects. And so does singular proper nouns. On the other hand, plural nouns and common nouns are candidates that usually map into classes.

#### **Advantages**
This is one of the simplest approaches that could be easily understood and applied by a larger section of the user base. The problem statement does not necessarily be in English, but in any other language.

#### **Disadvantages**
The problem statement always may not help towards correct identification of a class. At times it could give us redundant classes. At times the problem statement may use abbreviations for large systems or concepts, and therefore, the identified class may actually point to an aggregate of classes. In other words, it may not find all the objects.

### Using Generalization
In this approach, all potential objects are classified into different groups based on some common behaviour. Classes are derived from these groups.

### Using Subclasses
Here, instead of identifying objects one goes for identification of classes based on some similar characteristics. These are the specialized classes. Common characteristics are taken from them to form the higher level generalized classes.

### Steps to Identify Domain Classes from Problem Statement
We now present the steps to identify domain classes from a given problem statement. This approach is mostly based on the “Grammatical approach using nouns” discussed above, with some insights from [i].

1. Make a list of potential objects by finding out the nouns and noun phrases from narrative problem statement
2. Apply subject matter expertise (or domain knowledge) to identify additional classes
3. Filter out the redundant or irrelevant classes
4. Classify all potential objects based on categories. We follow the category table as described by Ross. 


 Categories|	Explanation
 :--|:--|
 People|	Humans who carry out some function
 Places|	Areas set aside for people or things
Things|	Physical objects
Organizations|Collection of people, resources, facilities and capabilities having a defined mission
Concepts	|Principles or Ideas not tangible
Events	|Things that happen (usually at a given date and time), or as a steps in an ordered sequence

5. Group the objects based on similar attributes. While grouping we should remember that
    1. Different nouns (or noun phrases) can actually refer to the same thing (examples: house, home, abode)
    2. Same nouns (or noun phrases) could refer to different things or concepts (example: I go to school every day / This school of thought agrees with the theory)
6. Give related names to each group to generate the final list of top level classes
7. Iterate over to refine the list of classes

### Advanced Concepts
Identification of domain classes might not be a simple task for novices. It requires expertise and domain knowledge to identify business classes from plain English text. The concepts presented here have been kept simple in order to make a student familiarize with the subject. A lot of work has been done in this area, and various techniques have been proposed to identify domain classes. Interested readers may look at the following paper for an advanced treatment on this subject matter.

I. Y. Song, K. Yano, J. Trujillo, and S. Luján-Mora. "A Taxonomic Class Modeling Methodology for Object-Oriented Analysis", ***In Information Modeling Methods and Methodologies,*** Advanced Topics in Databases Series, Ed. (J Krostige, T. Halpin, K. Siau), Idea Group Publishing, 2004, pp. 216-240.


## Case Study

1. A Library Information System for SE VLabs Institute
The SE VLabs Institute has been recently setup to provide state-of-the-art research facilities in the field of Software Engineering. Apart from research scholars (students) and professors, it also includes quite a large number of employees who work on different projects undertaken by the institution.

As the size and capacity of the institute is increasing with the time, it has been proposed to develop a Library Information System (LIS) for the benefit of students and employees of the institute. LIS will enable the members to borrow a book (or return it) with ease while sitting at his desk/chamber. The system also enables a member to extend the date of his borrowing if no other booking for that particular book has been made. For the library staff, this system aids them to easily handle day-to-day book transactions. The librarian, who has administrative privileges and complete control over the system, can enter a new record into the system when a new book has been purchased, or remove a record in case any book is taken off the shelf. Any non-member is free to use this system to browse/search books online. However, issuing or returning books is restricted to valid users (members) of LIS only.

The final deliverable would a web application (using the recent HTML 5), which should run only within the institute LAN. Although this reduces security risk of the software to a large extent, care should be taken no confidential information (eg., passwords) is stored in plain text.

From the given problem statement we can identify the following nouns and noun phrases:

- The SE VLabs Institute
- Software Engineering
- Research scholars
- Students
- Professors
- Employees
- Projects
- Institution
- Library Information System
- Members
- Book
- Desk
- Chamber
- System
- Library staff
- Librarian
- Transactions
- Record
- Shelf
- Non-member
- Web application
- LAN
- Software
- Information
- Passwords

#####  Let us put the above into different categories.

**People**
- Research scholars
- Students
- Professors
- Employees
- Members
- Library staff
- Librarian
- Non-member

**Places**
- Chamber

**Things**
- Projects
- Book
- Desk
- System
- Shelf
- LAN

**Organizations**
- The SE VLabs Institute
- Institution

**Concepts**
- Software Engineering
- Library Information System
- Record
- Web application
- Software
- Information
- Password

**Events**
- Transactions

The nouns and noun phrases in the problem statement gives us a list of 25 potential classes. However, all of them may not be relevant. For example, 'Chamber' is not something related to the Library Information System. And so are 'Projects', 'Desk', 'Shelf'. In a similar way, 'Software Engineering', 'Web application', 'Software' doesn't seem to be potential classes in this context. If we filter these entries, we might find that the follwong set of classes directly relate to the business activities of LIS:

- Member
- Book
- Transaction (of books)
- Librarian
- Employee

Although not explicitly mentioned in the problem statement, based on knowledge in related area one may point out few other potential classes:

- Book Inventory
- Distributor
- Order
- Order Line Item
- Payment
- Invoice

Among the classes listed above, 'Member', 'Librarian', 'Employee' share some common characteristics. For instance, everyone has a name, each has got an unique ID in the institution. In fact, 'Librarian' and 'Member' are some specialized category of the class 'Employee'. (This considers a student is also an "employee".) The above identified conceptual classes pave the way for modeling of design and implementation classes.