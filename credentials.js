let creds;

if (process.env.live_answerconnect === 'true') {
	creds = {
		user: 'rufusanswerconnectuk@gmail.com',
		password: 'test123123',
	};
}

if (process.env.live_answerforce === 'true') {
	creds = {
		user: 'ashok.answerforce@gmail.com',
		password: 'test123123',
	};
}
if (process.env.live_answerforce === 'true') {
	creds = {
		user2: 'jvon.bright@eerees.com',
		password: 'test123123',
	};
}

if (process.env.prealpha === 'true') {
	creds = {
		user: 'rufusanswerconnectuk@gmail.com',
		password: 'test123123',
	};
}

if (process.env.live_lexreception === 'true') {
	creds = {
		user: 'rufuslexreception@gmail.com',
		password: 'test123123',
	};
}
if (process.env.live_hellosells === 'true') {
	creds = {
		user: 'hellosells@cwa.com',
		password: 'test123123',
	};
}
if (process.env.live_wellreceived === 'true') {
	creds = {
		user: 'rufuswellreceived@gmail.com',
		password: 'test123123',
	};
}
if (process.env.liveSetmore === true) { // yet to get
  creds = {
    user: '',
    password: '',
  };
}

if (process.env.staging_answerconnect === 'true') {
	creds = {
		user: 'rufus@answerconnect.com',
		password: 'test123123',
	};
}

if (process.env.staging_answerforce === 'true') {
	creds = {
		user: 'rufus@answerforce.com',
		password: 'test123123',
	};
}

if (process.env.staging_lexreception === 'true') {
	creds = {
		user: 'rufus@lexreception.com',
		password: 'test123123',
	};
}
if (process.env.staging_hellosells === 'true') {
	creds = {
		user: 'rufus@hellosells.com',
		password: 'test123123',
	};
}
if (process.env.staging_wellreceived === 'true') {
	creds = {
		user: 'rufus@wellrecived.com',
		password: 'test123123',
	};
}
if (process.env.staging_admin === 'true') {
	creds = {
		user: 'rufus.robert@anywhere.co',
		password: 'test123123',
	};
}
if (process.env.stagingSetmore === 'true') {
  creds = {
    user: 'stagingmail@mailinator.com',
    password: 'test123123',
  };
}

module.exports = creds;
