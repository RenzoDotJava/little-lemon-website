module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$':
			'identity-obj-proxy'
	}
};
