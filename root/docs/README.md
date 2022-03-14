# SOC-App

SIH 2022 

The video conferencing market is a multi-billion dollar industry that has been meeting with constant demand of market increase with continuous exposure to needs of digitizing in the online world, which has been recently struck to increase exponentially with the pandemic in the past years. 

Despite the growth, the video conferencing market has experienced a fair share of challenges. These include meetings being hijacked by online trolls, divulging sensitive information to unauthorized users and the improper management of meeting recordings. Furthermore, a sudden increase in usage is making these platforms vulnerable to various outages like server crashes and multiple data security attacks. One of the biggest target audience affected by this are educational institutions.Covid Pandemic /Lockdown has resulted in frustrations among students,It has affected their mental health as well, resulting in unwanted behaviours and activities which disturbs the whole class, and the decorum of the session/academic activities. The links for academic sessions/webinars/CREs are shared by a few students to miscreants, who then login into the meeting/sessions using the same link by using IDs or names of other identified participants. After login into the meeting, miscreant/mischievous students create indiscipline, confusion and use foul abusive languages to disturb the whole meeting.


There is an immediate need for change in organizational structure for internet conferencing with the uttermost security. We propose to solve this problem by using multiple CySec, Cryptographic and Machine learning concepts with state-of-the-art analytical and database handling of the traffic inside an organisation.

In the initial stage we have developed a prototype with dummy organization with a dummy database to display the potential. We have integrated a temporary chat app in the frontend with user sign up/ sign in options to demonstrate the working of the backend models. These include fetching the Ip address and MAC address of the device trying to login . Further we have integrated our NSFW neural network text moderation backend with the chat app to show the filtering feature. We have integrated the database with the help of MongoDB and the MAC address is passed as a post request to the server through multiple hashing to this database for identifying authorized logins. Also there is an admin view developed in a simple react component to provide advanced analytics/details we can know using the translational relationship between the components we store and other details. We refrained from developing a full edged video conferencing app integrated with the whole pipeline together and full functionalities, as we thought it would be better to discuss with the org's mentors if we should develop an independent full-stack solution or an easily integrable API. We have mentioned future scope in out project proposal which we plan to finish once we get selected for the Grand Finale.


## Screenshots

![Home Page](./screenshots/vpnCheck.png "VPN check")<br>
VPN checking

![Home Page](./screenshots/chatApp.png "Chat app")<br>
Chat app

![Batch Processing Page](./screenshots/nsfw.png "NSFW")<br>
NSFW tagging

![Analytics Page ](./screenshots/adminPage.png "Admin Page")<br>
Admin Page

![Whois Page](./screenshots/loginPage.png "Login Page")
<br>Login Page


## Steps to run

- clone the repo
- open terminal
- change directory to `./src/`
- go to backend folder and run `npm install` in terminal
- go to frontend folder and run `npm install` in terminal
- go to frontend folder and run `npm start`

## Contributers

- Aman Kumar [@am-a-man](https://github.com/am-a-man) <br>
- Dev Pant [@sigsev-dev](https://github.com/sigsev-dev) <br>
- Rishav  [@am-a-man](https://github.com/am-a-man) <br>
- Prasoon [@am-a-man](https://github.com/am-a-man)<br>
- Amardeep Saha [@am-a-man](https://github.com/am-a-man)<br>
- Ekta [@am-a-man](https://github.com/am-a-man)<br>

