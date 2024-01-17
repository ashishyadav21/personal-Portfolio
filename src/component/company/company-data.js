import reactIcon from "../../Assets/Images/react-icon.png";

export const companyData = [
  { id:1,
    company: "Mconverges Pvt Ltd",
    JobProfile: "Android Developer",
    companyLogo:
      "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397189367/9992bfb0c23f6d9a0091d99938fc886e.gif",
    joiningDate: "6th July 2016",
    endDate: "17th July 2019",
    projects: [
      {
        projectTitle: "Phlebotomist Rider App",
        projectDescription:
          `This app is only for Phlebotomist only. It is a bike rider app.
           This functionality of this app that, whenever a client booked test online through the U-firstDiagonistics app a notification pop up to
          the nearby rider's phone. Rider selected by the nearest rider location. Rider accept the booking and went to customer's address to collect the data.
          /n It will help to collect sample around the city. 
           It will guide you to the patient's home address and will inform you about the sample drop off point. It take you 
           to directly to Patient's address with the help of google map`,
        projectRole: "Junior Developer",
        TeamSize: 8,
        projectType: "Client",
        TechnologyUsed: [
          { name: "Android Studio", language: { icon: reactIcon } },
          { name: "Java", language: { icon: reactIcon } },
          { name: "Retrofit", language: { icon: reactIcon } },
          { name: "Google Maps", language: { icon: reactIcon } },
         ],
        projectDuration: "6-7 months",
        projectLiveUrl: "https://play.google.com/store/apps/details?id=com.lalpathlabs.phlebo&hl=en_IN&gl=US",
      },
      {
        projectTitle: "Meter Reader",
        projectDescription:
          `This app realted to note down the reading of a meter. App contain different type of meter. it contain
          Electricity and Water reading meter. It was created for UHBVN. the app will get open with the user authentication.
          user enter the meter number and all the details will open in edit mode. After this the user can enter the reading and can 
          generate the bill with the help of previous reading and current reading.`,
        projectRole: "Android Developer",
        TeamSize: 7,
        projectType: "Client",
        TechnologyUsed: [
          { name: "Android Studio", language: { icon: reactIcon } },
          { name: "Java", language: { icon: reactIcon } },
          { name: "Retrofit", language: { icon: reactIcon } },
          { name: "Google Maps", language: { icon: reactIcon } },
         ],
        projectDuration: "6-7 months",
        projectLiveUrl: "https://play.google.com/store/apps/details?id=com.dimonnwc3.meterable&hl=en_IN&gl=US",
      },
    ],
  },
  {
    id:2,
    company: "Innostax Software Labs Pvt Ltd",
    JobProfile: "Senior Software Developer",
    companyLogo:
      "http://companies.naukri.com/sapient-jobs/wp-content/uploads/sites/85/2016/05/SAPIENT-OG-TAG-LOGO.jpg",
    joiningDate: "19 Jan 2019",
    endDate: "19 Feb 2021",
    projects: [
      {
        projectTitle: "Autodesk Construction cloud",
        projectDescription:
          "ACC marketing site is auto cad marketing site and used for to show their product, webinar all over the world. auto desk pushes their all product related to format and contractor in all language to all over the world. everyone can check products online and ask query online. Some time user need to fill form to contact Autodesk. Autodesk shows webinar video, the video put by Autodesk team on different product, User can view the video live and OnDemand video is also available to which user have to submit a form",
        projectRole: "Team Lead",
        TeamSize: 4,
        projectType: "Client",
        TechnologyUsed: [
          { name: "NextJs", language: { icon: reactIcon } },
          { name: "GatsbyJs", language: { icon: reactIcon } },
          { name: "GraphQL", language: { icon: reactIcon } },
          { name: "MaterialUI", language: { icon: reactIcon } },
          { name: "StoryBlok", language: { icon: reactIcon } },
        ],
        projectDuration: "10 months",
        projectLiveUrl: "https://construction.autodesk.com/",
      },
      {
        projectTitle: "Permit Docs",
        projectDescription:
          `PermitDocs is a web client app. It gernally provide all details related to a property to
          the consumer. User need not to go to municipal community to get all the details related to property. User
          search the address and can get easily find the property through google map API. User can check the all
          details of property like pipeline, washroom, bedroom, floor height etc. User can also check code related to
          property. User can save code and able to make code library. User can save a collections of code to make code
          library. User can make note with highlighted a text line and open a popover over the line where a user can
          add comment that helps other user to check the property`,
        TeamSize: 4,
        projectType: "Client",
        TechnologyUsed: [
          { name: "ReactJs", language: { icon: reactIcon } },
          { name: "Golang", language: { icon: reactIcon } },
          { name: "GraphQL", language: { icon: reactIcon } },
          { name: "Bootstrap", language: { icon: reactIcon } },
          { name: "MapBox", language: { icon: reactIcon } },
          { name: "Redux", language: { icon: reactIcon } }
        ],
        projectDuration: "10 months",
        projectLiveUrl: "https://www.permitdocs.com/",
      },
      {
        projectTitle: "Plan Grid",
        projectDescription:
          `PlanGrid is a construction productivity software designed for onsite construction workers. PlanGrid digitises blueprints. 
          It features version control and collaboration tools such as field markups, progress photos and issues tracking. My task on this just to fix the bugs and review and
          refactoring. This was on the edge to handover so my only work to handover the good quality of code.
          did the basic CSS in this. debugging and fixing the defects as well as analyzing`,
        TeamSize: 4,
        projectType: "Client",
        TechnologyUsed: [
          { name: "ReactJs", language: { icon: reactIcon } },
          { name: "NodeJs", language: { icon: reactIcon } },
          { name: "MaterialUI", language: { icon: reactIcon } },
        ],
        projectDuration: "10 months",
        projectLiveUrl: "https://app.plangrid.com",
      },
    ],
  },
  { 
    id: 3,
    company: "Wudza",
    JobProfile: "Senior Software Developer",
    joiningDate: "19 Feb 2021",
    endDate: "11th July 2019",
    projects: [
      {
        projectTitle: "Monopoly (enterprises chat app for business)",
        projectDescription:
          `Monoly is a web chat app. its functionality is similar to slack. but it provide data privacy.
          Where a enterprises can create his own workspace on this app. can create new discussion and add the user
          to chat. Can send invitation to the external user out of organizations. can remove user and add user on a
          discussion. In this app customer can create different group within team to communicate and sharing the data.
          Voice call and Video call functionality. It use the real time chat services. can share images and other files also.`,
        TeamSize: 30,
        projectType: "Client",
        TechnologyUsed: [
          { name: "ReactJs", language: { icon: reactIcon } },
          { name: "GoLang", language: { icon: reactIcon } },
          { name: "GraphQL", language: { icon: reactIcon } },
          { name: "Bootsrap", language: { icon: reactIcon } },
          { name: "Websockets", language: { icon: reactIcon } },
          { name: "BlockChain", language: { icon: reactIcon } },
        ],
        projectDuration: "10 months",
       },
    ],
  },
  {
    id: 4,
    company: "PROTIVITI",
    JobProfile: "Team Lead",
    projects: [
      {
        projectTitle: "Credential Engine",
        projectDescription:
          `The Pathway Builder offers a user-friendly drag and drop interface that allows you to visually construct your pathway.
          By using connectors, you can link the Pathway Components together to depict the progression towards the destination. \
          This intuitive tool enables you to build pathways ranging from simple to complex, seamlessly incorporating data from multiple sources.
          The Credential Registry provides a rich collection of Pathway Components that you can leverage by searching for relevant components and adding them to the Pathway Builder board. In cases where the desired data is not available in the Registry, 
          you have the flexibility to utilize a library of components and combine them with the Registry data. \

          CTDL Pathways are a means of designing and representing progressions towards specific destinations using Pathway Components.  \
          In the context of the Credential Registry Pathway Builder, a Pathway Component refers to any entity such as credentials, courses, competencies, extracurricular, work experience, or jobs that can be included in a pathway. The ultimate goal of a pathway is to reach a destination,
          which is represented by a Pathway Component that signifies where a person could be upon completing the pathway`,
        projectRole: "Team Lead",
        TeamSize: 4,
        projectType: "Client",
        TechnologyUsed: [
          { name: "ReactJs", language: { icon: reactIcon } },
          { name: "NodeJs", language: { icon: reactIcon } },
          { name: "GraphQL", language: { icon: reactIcon } },
          { name: "Html", language: { icon: reactIcon } },
          { name: "Css", language: { icon: reactIcon } },
         ],
        projectDuration: "10 months",
        projectLiveUrl: "https://credentialengine.org/",
      },
      {
        projectTitle: "Successware",
        projectDescription:
          `Successware stands out from other platforms because the accounting functionality, customer service software, and service tracking software are directly accessible within the platform, not as an add-on or separate purchase.

          When developing Successware, the accounting portion was created to tie into each aspect of the platform – invoices, price books, 
          general ledgers – to offer you one streamlined, simple solution.
          
          The customer service management software is integrated into the Successware platform to help our clients maintain their prospects and current customers with ease.
          It is Software Solutions for Home Service Contractors. Through this app you can book any service for your office and home.
          services like Electricity, Plumber, etc. It book your service on a specific date and keep track of all your services for future easiness`,
        projectRole: "Team Lead",
        TeamSize: 4,
        projectType: "Client",
        TechnologyUsed: [
          { name: "ReactJs", language: { icon: reactIcon } },
          { name: "GatsbyJs", language: { icon: reactIcon } },
          { name: "GraphQL", language: { icon: reactIcon } },
          { name: "MaterialUI", language: { icon: reactIcon } },
          { name: "MaterialUI", language: { icon: reactIcon } },
        ],
        projectDuration: "10 months",
        projectLiveUrl: "https://www.successware.com/",
      },
    ],
  },
];
