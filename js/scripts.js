const speakersObj = [
  {
    imgName: 'speaker1.jpg',
    name: 'Gil Fink',
    title: 'sparXys',
    desc: 'Gil Fink is a web development expert, Web Technologies GDE, Microsoft Development Technologies MVP and sparXys CEO. He is currently consulting for various enterprises and companies, where he helps to develop web based solutions.',
  },
  {
    imgName: 'speaker2.jpg',
    name: 'Karin Angel',
    title: 'Sapiens',
    desc: 'I am a big believer in testing for releasing a good piece of code, especially when it comes to releasing code as part of a development team, over Microservices architecture, and hope on passing this passion to others in the community.',
  },
  {
    imgName: 'speaker3.jpg',
    name: 'Derek Binkley',
    title: 'Spark Labs',
    desc: 'Derek Binkley is a Software Consultant with Spark Labs. While getting his start fixing the Y2K date problem in Cobol, Derek quickly moved on to spend over twenty years using PHP, JVM Languages, JavaScript, MySQL, ElasticSearch, and Oracle.',
  },
  {
    imgName: 'speaker4.jpg',
    name: 'Hans-Christian Otto',
    title: 'Suora GmbH',
    desc: 'After several years of being employed as a Director of Software Development, Christian co-founded Suora GmbH, a company that supports customers in designing, building, and modernizing web applications.',
  },
  {
    imgName: 'speaker5.jpg',
    name: 'Lamis Chebbi',
    title: 'Vermeg',
    desc: 'Lamis is an enthusiastic software engineer with a strong passion for the modern web. She’s the founder of “Angular Tunisia”, a member of WWCode Community, speaker, content creator, and a trainer.',
  },
  {
    imgName: 'speaker6.jpg',
    name: 'Ana Cidre',
    title: 'Auth0',
    desc: 'Ana is a Developer Advocate at Auth0. She has a degree in Fine Arts and a Master in International Business Economics and Management, so she is not your usual software developer. As a very active member of the community, she regularly organises meetups and conferences, like the amazing ngSpain.',
  },
];

const appendChildren = (parent, children) => {
  children.forEach(
    (child) => {
      parent.appendChild(child);
    },
  );
};

window.onload = () => {
  const groupSpeakers = document.getElementById('speakers');
  speakersObj.forEach(
    (speaker) => {
      const name = document.createElement('h3');
      name.className = 'speaker-name';
      name.innerText = speaker.name;
      const p1 = document.createElement('p');
      p1.className = 'speaker-title';
      p1.innerText = speaker.title;
      const hr = document.createElement('hr');
      hr.className = 'speaker-hr';
      const p2 = document.createElement('p');
      p2.className = 'speaker-desc';
      p2.innerText = speaker.desc;
      const firstDiv = document.createElement('div');
      firstDiv.className = 'col-8 text-start';
      appendChildren(firstDiv, [name, p1, hr, p2]);

      const secondDiv = document.createElement('div');
      secondDiv.className = 'col-4';
      const img = document.createElement('img');
      img.className = 'speaker';
      img.src = `imgs/${speaker.imgName}`;
      img.alt = `Image of ${speaker.name}`;
      secondDiv.appendChild(img);

      const thirdDiv = document.createElement('div');
      thirdDiv.className = 'row';
      appendChildren(thirdDiv, [secondDiv, firstDiv]);

      const fourthDiv = document.createElement('div');
      fourthDiv.className = 'col-lg-6 mb-1';
      fourthDiv.appendChild(thirdDiv);

      groupSpeakers.appendChild(fourthDiv);
    },
  );
};
