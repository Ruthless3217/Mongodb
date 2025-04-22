MongoDB Practical Slips Solutions (Slips 1 to 20)
Slip 1

Create database: StudentDB

use StudentDB

Create collection: Student with fields: roll_no, name, percentage

db.createCollection("Student")

db.Student.insertMany([
  { roll_no: 1, name: "Amit", percentage: 85 },
  { roll_no: 2, name: "Sneha", percentage: 92 },
  { roll_no: 3, name: "Ravi", percentage: 76 },
  { roll_no: 4, name: "Meena", percentage: 88 },
  { roll_no: 5, name: "John", percentage: 67 }
])

Show all students

db.Student.find()

Students with percentage > 80

db.Student.find({ percentage: { $gt: 80 } })


Slip 2

Create database: CompanyDB

use CompanyDB

Collection: Employee with fields: eid, name, salary, department

db.createCollection("Employee")

db.Employee.insertMany([
  { eid: 1, name: "Amit", salary: 35000, department: "HR" },
  { eid: 2, name: "Sneha", salary: 42000, department: "IT" },
  { eid: 3, name: "Ravi", salary: 30000, department: "Sales" },
  { eid: 4, name: "Meena", salary: 39000, department: "IT" },
  { eid: 5, name: "John", salary: 28000, department: "HR" }
])

Show all employees

db.Employee.find()

Employees with salary > 35000

db.Employee.find({ salary: { $gt: 35000 } })

IT department employees

db.Employee.find({ department: "IT" })


Slip 3

Create database: HospitalDB

use HospitalDB

Collection: Patient with fields: pid, name, age, disease

db.createCollection("Patient")

db.Patient.insertMany([
  { pid: 1, name: "Anil", age: 45, disease: "Diabetes" },
  { pid: 2, name: "Seema", age: 29, disease: "Flu" },
  { pid: 3, name: "Ravi", age: 34, disease: "Asthma" },
  { pid: 4, name: "Meena", age: 25, disease: "Fever" },
  { pid: 5, name: "Vikram", age: 60, disease: "Hypertension" }
])

Show all patients

db.Patient.find()

Patients above age 30

db.Patient.find({ age: { $gt: 30 } })


Slip 4

Create database: ProductDB

use ProductDB

Collection: Product with fields: pid, name, category, price

db.createCollection("Product")

db.Product.insertMany([
  { pid: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { pid: 2, name: "Chair", category: "Furniture", price: 3000 },
  { pid: 3, name: "Phone", category: "Electronics", price: 25000 },
  { pid: 4, name: "Pen", category: "Stationery", price: 20 },
  { pid: 5, name: "Table", category: "Furniture", price: 4000 }
])

Show all products

db.Product.find()

Products in Electronics category

db.Product.find({ category: "Electronics" })

Products with price > 5000

db.Product.find({ price: { $gt: 5000 } })


Slip 5

Create database: MovieDB

use MovieDB

Collection: Movie with fields: mid, title, director, rating

db.createCollection("Movie")

db.Movie.insertMany([
  { mid: 1, title: "Inception", director: "Nolan", rating: 9 },
  { mid: 2, title: "Interstellar", director: "Nolan", rating: 8.5 },
  { mid: 3, title: "Avengers", director: "Russo", rating: 8.2 },
  { mid: 4, title: "Titanic", director: "Cameron", rating: 8.9 },
  { mid: 5, title: "Avatar", director: "Cameron", rating: 8.3 }
])

Show all movies

db.Movie.find()

Movies by director 'Nolan'

db.Movie.find({ director: "Nolan" })

Movies with rating > 8.5

db.Movie.find({ rating: { $gt: 8.5 } })


Slip 6

Create database: MobileDB

use MobileDB

Collection: Mobile with fields: mid, brand, model, price

db.createCollection("Mobile")

db.Mobile.insertMany([
  { mid: 1, brand: "Apple", model: "iPhone 13", price: 70000 },
  { mid: 2, brand: "Samsung", model: "S21", price: 60000 },
  { mid: 3, brand: "OnePlus", model: "9R", price: 45000 },
  { mid: 4, brand: "Realme", model: "X7", price: 25000 },
  { mid: 5, brand: "Redmi", model: "Note 10", price: 15000 }
])

Show all mobiles

db.Mobile.find()

Mobiles with price > 30000


db.Mobile.find({ price: { $gt: 30000 } })

Brand = 'Apple'

db.Mobile.find({ brand: "Apple" })


Slip 7

Create database: HotelDB

use HotelDB

Collection: Room with fields: rid, type, rent_per_day, available

db.createCollection("Room")

db.Room.insertMany([
  { rid: 1, type: "Deluxe", rent_per_day: 5000, available: true },
  { rid: 2, type: "Standard", rent_per_day: 3000, available: true },
  { rid: 3, type: "Suite", rent_per_day: 7000, available: false },
  { rid: 4, type: "Deluxe", rent_per_day: 5500, available: true },
  { rid: 5, type: "Standard", rent_per_day: 3200, available: false }
])

Show all rooms

db.Room.find()

Available rooms

db.Room.find({ available: true })

Rent > 4000

db.Room.find({ rent_per_day: { $gt: 4000 } })


Slip 8

Create database: CollegeDB

use CollegeDB

Collection: Course with fields: cid, cname, duration, fees

db.createCollection("Course")

db.Course.insertMany([
  { cid: 1, cname: "BSc", duration: 3, fees: 30000 },
  { cid: 2, cname: "MSc", duration: 2, fees: 40000 },
  { cid: 3, cname: "BCA", duration: 3, fees: 35000 },
  { cid: 4, cname: "MCA", duration: 2, fees: 45000 },
  { cid: 5, cname: "BA", duration: 3, fees: 25000 }
])

Show all courses

db.Course.find()

Courses with fees > 30000

db.Course.find({ fees: { $gt: 30000 } })

MCA course

db.Course.find({ cname: "MCA" })


Slip 9

Create database: ShoppingDB

use ShoppingDB

Collection: Customer with fields: cid, name, city, purchases

db.createCollection("Customer")

db.Customer.insertMany([
  { cid: 1, name: "Ravi", city: "Pune", purchases: 12 },
  { cid: 2, name: "Sneha", city: "Mumbai", purchases: 20 },
  { cid: 3, name: "Amit", city: "Pune", purchases: 15 },
  { cid: 4, name: "Meena", city: "Nashik", purchases: 8 },
  { cid: 5, name: "John", city: "Mumbai", purchases: 18 }
])

Show all customers

db.Customer.find()

Customers from Pune

db.Customer.find({ city: "Pune" })

Purchases > 10

db.Customer.find({ purchases: { $gt: 10 } })


Slip 10

Create database: TransportDB

use TransportDB

Collection: Vehicle with fields: vid, type, company, mileage

db.createCollection("Vehicle")

db.Vehicle.insertMany([
  { vid: 1, type: "Car", company: "Maruti", mileage: 20 },
  { vid: 2, type: "Bike", company: "Honda", mileage: 55 },
  { vid: 3, type: "Car", company: "Hyundai", mileage: 18 },
  { vid: 4, type: "Truck", company: "Tata", mileage: 8 },
  { vid: 5, type: "Bike", company: "TVS", mileage: 60 }
])

Show all vehicles

db.Vehicle.find()

Bikes only

db.Vehicle.find({ type: "Bike" })

Mileage > 20

db.Vehicle.find({ mileage: { $gt: 20 } })


Slip 11

Create database: BookStoreDB

use BookStoreDB

Collection: Book with fields: bid, title, author, price

db.createCollection("Book")

db.Book.insertMany([
  { bid: 1, title: "Wings of Fire", author: "APJ Abdul Kalam", price: 250 },
  { bid: 2, title: "The Alchemist", author: "Paulo Coelho", price: 300 },
  { bid: 3, title: "Think and Grow Rich", author: "Napoleon Hill", price: 350 },
  { bid: 4, title: "1984", author: "George Orwell", price: 200 },
  { bid: 5, title: "Sapiens", author: "Yuval Noah Harari", price: 400 }
])

Show all books

db.Book.find()

Books by Paulo Coelho

db.Book.find({ author: "Paulo Coelho" })

Books priced above 300

db.Book.find({ price: { $gt: 300 } })


Slip 12

Create database: SchoolDB

use SchoolDB

Collection: Teacher with fields: tid, name, subject, experience_years

db.createCollection("Teacher")

db.Teacher.insertMany([
  { tid: 1, name: "Mrs. Desai", subject: "Math", experience_years: 10 },
  { tid: 2, name: "Mr. Patil", subject: "English", experience_years: 8 },
  { tid: 3, name: "Ms. Mehta", subject: "Science", experience_years: 6 },
  { tid: 4, name: "Mr. Joshi", subject: "History", experience_years: 5 },
  { tid: 5, name: "Ms. Rao", subject: "Geography", experience_years: 7 }
])

Show all teachers

db.Teacher.find()

Teachers with more than 7 years experience

db.Teacher.find({ experience_years: { $gt: 7 } })


Slip 13


Create database: MusicDB

use MusicDB

Create collection: Song with fields: sid, title, singer, duration


db.createCollection("Song")

db.Song.insertMany([
  { sid: 1, title: "Shape of You", singer: "Ed Sheeran", duration: 4.2 },
  { sid: 2, title: "Blinding Lights", singer: "The Weeknd", duration: 3.5 },
  { sid: 3, title: "Perfect", singer: "Ed Sheeran", duration: 4.4 },
  { sid: 4, title: "Levitating", singer: "Dua Lipa", duration: 3.8 },
  { sid: 5, title: "Senorita", singer: "Shawn Mendes", duration: 3.1 }
])

Show all songs

db.Song.find()

Songs sung by 'Ed Sheeran'

db.Song.find({ singer: "Ed Sheeran" })


Songs with duration > 4 minutes

db.Song.find({ duration: { $gt: 4 } })



Slip 14

Create database: BankDB

use BankDB

Create collection: Account with fields: acc_no, name, acc_type, balance
db.createCollection("Account")

db.Account.insertMany([
  { acc_no: 101, name: "Ravi", acc_type: "Savings", balance: 5000 },
  { acc_no: 102, name: "Sneha", acc_type: "Current", balance: 12000 },
  { acc_no: 103, name: "Amit", acc_type: "Savings", balance: 7500 },
  { acc_no: 104, name: "Pooja", acc_type: "Current", balance: 10000 },
  { acc_no: 105, name: "Kiran", acc_type: "Savings", balance: 4500 }
])

Show all accounts

db.Account.find()


Show all Savings accounts

db.Account.find({ acc_type: "Savings" })

Show accounts with balance > 5000

db.Account.find({ balance: { $gt: 5000 } })


Slip 15

Create database: LibraryDB

use LibraryDB

Create collection: Member with fields: mid, name, membership_type, books_issued

db.createCollection("Member")

db.Member.insertMany([
  { mid: 1, name: "Asha", membership_type: "Gold", books_issued: 5 },
  { mid: 2, name: "Ravi", membership_type: "Silver", books_issued: 2 },
  { mid: 3, name: "Sneha", membership_type: "Gold", books_issued: 4 },
  { mid: 4, name: "Amit", membership_type: "Bronze", books_issued: 1 },
  { mid: 5, name: "Kiran", membership_type: "Silver", books_issued: 3 }
])

Show all members

db.Member.find()


Show Gold members

db.Member.find({ membership_type: "Gold" })

Members who issued more than 2 books

db.Member.find({ books_issued: { $gt: 2 } })


Slip 16

Create database: CourseDB

use CourseDB

Create collection: Course with fields: cid, cname, duration_months, fee

db.createCollection("Course")

db.Course.insertMany([
  { cid: 1, cname: "Python", duration_months: 3, fee: 15000 },
  { cid: 2, cname: "Java", duration_months: 4, fee: 20000 },
  { cid: 3, cname: "Data Science", duration_months: 6, fee: 50000 },
  { cid: 4, cname: "Web Dev", duration_months: 3, fee: 18000 },
  { cid: 5, cname: "C++", duration_months: 2, fee: 12000 }
])

Display all courses

db.Course.find()

Courses with duration >= 4 months

db.Course.find({ duration_months: { $gte: 4 } })

Courses with fee > 15000

db.Course.find({ fee: { $gt: 15000 } })



Slip 17


Create database: InsuranceDB

use InsuranceDB

Collection: Policy with fields: pid, policy_type, amount, years

db.createCollection("Policy")

db.Policy.insertMany([
  { pid: 1, policy_type: "Life", amount: 500000, years: 10 },
  { pid: 2, policy_type: "Health", amount: 200000, years: 5 },
  { pid: 3, policy_type: "Vehicle", amount: 100000, years: 2 },
  { pid: 4, policy_type: "Life", amount: 600000, years: 12 },
  { pid: 5, policy_type: "Health", amount: 250000, years: 7 }
])

Show all policies

db.Policy.find()

Show Life policies

db.Policy.find({ policy_type: "Life" })

Policies with amount > 200000

db.Policy.find({ amount: { $gt: 200000 } })


Slip 18

Create database: GymDB

use GymDB

Collection: Member with fields: mid, name, plan, duration_months


db.createCollection("Member")

db.Member.insertMany([
  { mid: 1, name: "Rahul", plan: "Gold", duration_months: 12 },
  { mid: 2, name: "Sneha", plan: "Silver", duration_months: 6 },
  { mid: 3, name: "Amit", plan: "Platinum", duration_months: 18 },
  { mid: 4, name: "Meena", plan: "Silver", duration_months: 3 },
  { mid: 5, name: "John", plan: "Gold", duration_months: 9 }
])

Show all members

db.Member.find()

Show members with Gold plan

db.Member.find({ plan: "Gold" })

Members with duration > 6 months

db.Member.find({ duration_months: { $gt: 6 } })


Slip 19

Create database: RentalDB

use RentalDB

Collection: Car with fields: cid, model, company, rent_per_day

db.createCollection("Car")

db.Car.insertMany([
  { cid: 1, model: "Swift", company: "Maruti", rent_per_day: 1500 },
  { cid: 2, model: "City", company: "Honda", rent_per_day: 2000 },
  { cid: 3, model: "Altroz", company: "Tata", rent_per_day: 1700 },
  { cid: 4, model: "Innova", company: "Toyota", rent_per_day: 2500 },
  { cid: 5, model: "Tiago", company: "Tata", rent_per_day: 1600 }
])

Show all cars

db.Car.find()

Show Tata cars

db.Car.find({ company: "Tata" })

Cars with rent > 1600

db.Car.find({ rent_per_day: { $gt: 1600 } })


Slip 20

Create database: AttendanceDB

use AttendanceDB

Collection: Record with fields: roll_no, name, days_present, total_days

db.createCollection("Record")

db.Record.insertMany([
  { roll_no: 1, name: "Amit", days_present: 45, total_days: 50 },
  { roll_no: 2, name: "Sneha", days_present: 48, total_days: 50 },
  { roll_no: 3, name: "Ravi", days_present: 40, total_days: 50 },
  { roll_no: 4, name: "Pooja", days_present: 49, total_days: 50 },
  { roll_no: 5, name: "Meera", days_present: 38, total_days: 50 }
])

Show all attendance records

db.Record.find()

Show students with attendance >= 45

db.Record.find({ days_present: { $gte: 45 } })

Show students with attendance < 45

db.Record.find({ days_present: { $lt: 45 } })
