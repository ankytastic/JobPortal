# JobMatchPro - Online Job Portal

## Project Overview
**JobMatchPro** is a web-based application designed to connect job seekers (graduates) and employers, with the assistance of an administrator who facilitates communication. The portal allows graduates to create and manage their profiles, view job vacancies, and receive notifications. Employers can post job openings, and administrators manage the communication between job seekers and employers.

### Roles in the System:
1. **Graduate (Job Seeker)**: A user looking for jobs, either a fresher or an experienced professional. They can create and update their profiles, including personal, educational, and skill details.
2. **Employer**: An individual representing an organization, who can post job vacancies and manage job listings.
3. **Administrator**: Typically an HR representative, the administrator manages communication between job seekers and employers, notifies eligible candidates, and maintains the database of employees and job listings.

---

## Features

- **Job Seeker Profile Management**:
   - Graduates can create and update their profiles, including personal, educational, and skill details.

- **Employer Job Posting**:
   - Employers can post job openings with detailed requirements and qualifications.

- **Admin Dashboard**:
   - Administrators can manage the job seekers' and employers' data, oversee job postings, and facilitate the communication between the two.

- **Mock Test**:
   - Job seekers can access and complete mock tests related to various job profiles to help enhance their skills and prepare for interviews.

- **Job Availability Page**:
   - Job seekers can specify their availability for job opportunities.

- **About Us Page**:
   - An informative page to introduce the portal and its objectives.

- **Application Status Page**:
   - Job seekers can track the status of their applications (e.g., Under Review, Interview Scheduled, etc.).

- **Notifications**:
   - Graduates and employers will receive notifications about relevant job postings, interview schedules, or application status updates.

---

## Project Setup

### Prerequisites:
- **Backend**: Spring Boot (Java)
- **Database**: MySQL
- **Frontend**: React.js
- **Tools**: 
  - Node.js
  - MySQL Workbench (or any MySQL client)
  
### Installation Instructions:

#### Backend (Spring Boot with MySQL)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ankytastic/JobMatchPro.git
   ```

2. **Navigate to the backend folder**:
   ```bash
   cd JobMatchPro/backend
   ```

3. **Configure MySQL Database**:
   - Create a MySQL database named `job_match_pro` or use an existing one.
   - Configure the `application.properties` file with your MySQL connection details:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/job_match_pro
     spring.datasource.username=<your_mysql_username>
     spring.datasource.password=<your_mysql_password>
     spring.jpa.hibernate.ddl-auto=update
     ```

4. **Build the Spring Boot Application**:
   - Build the backend application using Maven or Gradle:
     ```bash
     mvn clean install
     ```

5. **Run the Backend Server**:
   - Run the Spring Boot server:
     ```bash
     mvn spring-boot:run
     ```

   - The backend server should now be running at `http://localhost:8080`.

#### Frontend (React.js)

1. **Navigate to the frontend folder**:
   ```bash
   cd JobMatchPro/frontend
   ```

2. **Install Node.js Dependencies**:
   - Install the required dependencies using npm:
     ```bash
     npm install
     ```

3. **Start the Development Server**:
   - Start the frontend server:
     ```bash
     npm start
     ```

   - The frontend should now be running at `http://localhost:5173`.

---

## Future Work:
- Integrating AI features to assist job seekers in finding suitable jobs based on their profiles and preferences.
- Enhancing the user interface and experience with real-time notifications and updates.
- Implementing appointment scheduling for job interviews.
- Adding support for additional languages and localization for broader accessibility.

---

## Technologies Used:
- **Frontend**: React.js
- **Backend**: Spring Boot (Java)
- **Database**: MySQL
- **Authentication**: To be implemented in future releases
- **Notification System**: To be implemented in future releases

---

## Contact:
For any questions or support, please reach out to [Ankit Raj](mailto:araj28111@gmail.com).