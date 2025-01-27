const MYPREZ = {};

MYPREZ.administrations = [
  {
    president: 'Donald Trump',
    image: 'Trump2.jpg',
    administration: 'Trump (2)',
    start: '2025-01-20',
    end: '2029-01-19'
  }, {
    president: 'Joe Biden',
    image: 'Biden.jpg',
    administration: 'Biden',
    start: '2021-01-20',
    end: '2025-01-19'
  }, {
    president: 'Donald Trump',
    image: 'Trump.jpg',
    administration: 'Trump (1)',
    start: '2017-01-20',
    end: '2021-01-19'
  }, {
    president: 'Barack Obama',
    image: 'Obama.jpg',
    administration: 'Obama',
    start: '2009-01-20',
    end: '2017-01-19'
  }, {
    president: 'George W. Bush',
    image: 'BushJr.jpg',
    administration: 'George W. Bush',
    start: '2001-01-20',
    end: '2009-01-19'
  }, {
    president: 'Bill Clinton',
    image: 'Clinton.jpg',
    administration: 'Clinton',
    start: '1993-01-20',
    end: '2001-01-19'
  }, {
    president: 'George H. W. Bush',
    image: 'Bush.jpg',
    administration: 'George H. W. Bush',
    start: '1989-01-20',
    end: '1993-01-19'
  }, {
    president: 'Ronald Reagan',
    image: 'Reagan.jpg',
    administration: 'Reagan',
    start: '1981-01-20',
    end: '1989-01-19'
  }, {
    president: 'Jimmy Carter',
    image: 'Carter.jpg',
    administration: 'Carter',
    start: '1977-01-20',
    end: '1981-01-19'
  }, {
    president: 'Gerald Ford',
    image: 'Ford.jpg',
    administration: 'Ford',
    start: '1974-08-09',
    end: '1977-01-19'
  }, {
    president: 'Richard Nixon',
    image: 'Nixon.jpg',
    administration: 'Nixon',
    start: '1969-01-20',
    end: '1974-08-08'
  }, {
    president: 'Lyndon B. Johnson',
    image: 'Johnson.jpg',
    administration: 'Johnson',
    start: '1963-11-22',
    end: '1969-01-19'
  }, {
    president: 'John F. Kennedy',
    image: 'Kennedy.jpg',
    administration: 'Kennedy',
    start: '1961-01-20',
    end: '1963-11-21'
  }
];

MYPREZ.findAdministration = function(birthdayTime) {
  let startTime,
      endTime;

  for (let i = 0; i < this.administrations.length; i++) {
    startTime = new Date(this.administrations[i].start).getTime();
    endTime = new Date(this.administrations[i].end).getTime();

    if (birthdayTime >= startTime && birthdayTime <= endTime) {
      return this.administrations[i];
    }
  }
};
