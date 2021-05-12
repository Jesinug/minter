# Project 3 - `README.md` 



## Description

Minter App is a social network to share knowledge. You never know who you will match ;D

## User Stories

- **404:** As an  anonymous user/user I can see a 404 page if I try to reach a page that does not exist

- **Sign up:** As an  anonymous user I can sign up in the platform

- **Login:** As a user I can login to the platform to share knowledge and learn from others

- **Edit profiles** As a user I can edit my profile

- **Delete profiles** As a user I can delete my profile

- **Logout:** As a user I can logout from the platform

- **Add Announcement** As a user I can add an Announcement

- **Edit Announcement** As a user I can edit an Announcement

- **Delete Announcement** As a user I can delete an Announcement

- **View Announcements Board** As a user I can see the Announcement Board where the Announcements are exposed

- **View another user's Profile** As a user I can see the profile of another user

  

## Backlog

User profile:

- two different profiles with different profile and conversation pages. Mentor and Mentee
- delete profile page. Confirmation required
- notifications via email
- profiles connected with linkedin profiles
- delete conversations



# Client / Frontend

## React Router Routes (React App)

| Path                       | Component             | Permissions                  | Behavior                                                     |
| -------------------------- | --------------------- | ---------------------------- | ------------------------------------------------------------ |
| `/`                        | Home                  | public `<Route>`             | Home page                                                    |
| `/signup`                  | SignupPage            | anonymous only `<AnonRoute>` | Signup form, link to login, navigate to homepage after signup |
| `/login`                   | LoginPage             | anonymous only `<AnonRoute>` | Login form, link to signup, navigate to boardPage after login |
| `/board`                   | BoardPage             | user only `<PrivateRoute>`   | Shows board/search page with announcements                   |
| `/board/announcement`      | AnnouncementPage      | user only `<PrivateRoute>`   | View of Announcement with details                            |
| `/board/announcement/:id`  | AnnouncementPage      | user only `<PrivateRoute>`   | Details of a announcement to edit                            |
| `/board/announcement/:id`  | n/a                   | user only `<PrivateRoute>`   | Delete announcement                                          |
| `/profile `                | ProfilePage           | user only `<PrivateRoute>`   | Details of user profile                                      |
| `/profile/:id`             | ProfilePage           | user only `<PrivateRoute>`   | Details of user profile to edit                              |
| `/profile/:id`             | n/a                   | user only `<PrivateRoute>`   | Delete user profile                                          |
| `/board/conversations`     | ConversationsListPage | user only `<PrivateRoute>`   | Page where you can see all your conversations                |
| `/board/conversations/`:id | ConversationPage      | user only `<PrivateRoute>`   | Page when you can see one conversation                       |
| 

## Components

- Home
- SignupPage
- LoginPage
- BoardPage
- AnnouncementPage
- ProfilePage
- Navbar

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Announcement Service
  - announcement.list()
  - announcement.detail(id)
  - announcement.add(id)
  - announcement.delete(id)



# Server / Backend

## Models

User model

```
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  pictureProfile: {type: String}
}
```

Announcement model

```
 {
   user: {id}
   skill: {type: String, required: true},
   description: {type: String}
 }
```

## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                            | Success status | Error Status | Description                                                  |
| ----------- | ---------------------- | --------------------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile`        | Saved session                           | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`         | {name, email, password}                 | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {username, password}                    | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`         | (empty)                                 | 204            | 400          | Logs out the user                                            |
| GET         | `/api/announcemnt`     |                                         |                |              | Gets all the announcements of database                       |
| GET         | `/api/announcemnt/:id` | {id}                                    |                |              | Gets  one announcement of database                           |
| POST        | `/api/announcemnt`     | {}                                      | 201            | 400          | Create a new announcement on the database                    |
| PUT         | `/api/announcemnt`/:id | {skill, description}                    | 200            | 400          | Upload one announcement of the database                      |
| DELETE      | `/api/announcemnt/:id` | {id}                                    | 201            | 400          | Delete one announcement of the database                      |
| GET         | `/api/users`           |                                         |                | 400          | Gets all the users of database                               |
| GET         | `/api/users/:id`       | {id}                                    |                |              | Gets  one user of database                                   |
| POST        | `/api/users`           | {name, email, password, profilePicture} | 200            | 400          | Create a new user on the database                            |
| PUT         | `/api/users/:id`       | {name, password, profilePicture}        | 201            | 400          | Upload one user of the database                              |
| DELETE      | `/api/users/:id`       | {id}                                    | 200            | 400          | Delete one user of the database                              |
|       

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/wdsKnmcJ/project-3) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](https://www.figma.com/file/Y4hHFYCtFylPNOUIU2fFAI/Minder?node-id=0%3A1)