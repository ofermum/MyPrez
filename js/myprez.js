const MYPREZ = {};

MYPREZ.administrations = [
  {
    president: 'Donald Trump',
    administration: 'Trump (2)',
    start: '2025-01-20',
    end: '2029-01-19'
  }, {
    president: 'Joe Biden',
    administration: 'Biden',
    start: '2021-01-20',
    end: '2025-01-19'
  }, {
    president: 'Donald Trump',
    administration: 'Trump (1)',
    start: '2017-01-20',
    end: '2021-01-19'
  }, {
    president: 'Barack Obama',
    administration: 'Obama',
    start: '2009-01-20',
    end: '2017-01-19'
  }, {
    president: 'George W. Bush',
    administration: 'George W. Bush',
    start: '2001-01-20',
    end: '2009-01-19'
  }, {
    president: 'Bill Clinton',
    administration: 'Clinton',
    start: '1993-01-20',
    end: '2001-01-19'
  }, {
    president: 'George H. W. Bush',
    administration: 'George H. W. Bush',
    start: '1989-01-20',
    end: '1993-01-19'
  }, {
    president: 'Ronald Reagan',
    administration: 'Reagan',
    start: '1981-01-20',
    end: '1989-01-19'
  }, {
    president: 'Jimmy Carter',
    administration: 'Carter',
    start: '1977-01-20',
    end: '1981-01-19'
  }, {
    president: 'Gerald Ford',
    administration: 'Ford',
    start: '1974-08-09',
    end: '1977-01-19'
  }, {
    president: 'Richard Nixon',
    administration: 'Nixon',
    start: '1969-01-20',
    end: '1974-08-08'
  }, {
    president: 'Lyndon B. Johnson',
    administration: 'Johnson',
    start: '1963-11-22',
    end: '1969-01-19'
  }, {
    president: 'John F. Kennedy',
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
      return this.administrations[i].administration;
    }
  }
};
