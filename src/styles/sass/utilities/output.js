const styles = {
	'.bg-primary': { background: 'rgba(var(--primary), 1) !important' },
	'.bg-secondary': { background: 'rgba(var(--secondary), 1) !important' },
	'.bg-green': {
		backgroundColor: 'rgba(0, 128, 0, 0.75) !important',
		background: '#08ad6c !important'
	},
	'.bg-error': {
		background: 'rgba(var(--error), 1) !important',
		fallbacks: [{ background: 'rgba(var(--error), 1) !important' }],
		color: 'white !important'
	},
	'.bg-white': { background: '#fff !important', color: 'inherit' },
	'.bg-default': { background: 'var(--bg-default) !important' },
	'.bg-paper': { background: 'var(--bg-paper)' },
	'.bg-light-gray': { background: 'rgba(0, 0, 0, 0.08) !important' },
	'.bg-dark': { background: '#000000', color: '#fff' },
	'.bg-light-dark': { background: '#212121', color: 'white' },
	'.hover-bg-primary': { transition: 'all 250ms' },
	'.hover-bg-primary:hover': {
		background: 'rgba(var(--primary), 1) !important',
		color: '#ffffff',
		backgroundColor: 'rgba(var(--primary), 1) !important',
		fallbacks: [{ color: 'white !important' }]
	},
	'.hover-bg-primary:hover [class^="MuiSvgIcon-"]': {
		fill: 'white !important'
	},
	'.bg-light-primary::after': { background: 'rgba(var(--primary), 1)' },
	'.bg-light-secondary': { position: 'relative', zIndex: '0' },
	'.bg-light-secondary::after': { background: 'rgba(var(--secondary), 1)' },
	'.bg-light-error': { position: 'relative', zIndex: '0' },
	'.bg-light-error::after': { background: 'rgba(var(--error), 1)' },
	'.bg-light-green': { background: 'rgba(8, 173, 108, 0.5) !important' },
	'[class^="bg-light-"], [class*=" bg-light-"]': {
		position: 'relative',
		zIndex: '0'
	},
	'[class^="bg-light-"]::after, [class*=" bg-light-"]::after': {
		content: '""',
		position: 'absolute',
		top: '0',
		right: '0',
		bottom: '0',
		left: '0',
		opacity: '0.15',
		zIndex: '-1',
		borderRadius: '8px'
	},
	'.bg-transperant': { background: 'transparent !important' },
	'.text-white': { color: '#fff !important' },
	'.text-black': { color: 'rgba(0, 0, 0, 0.87) !important' },
	'.text-white-secondary': { color: 'rgba(255, 255, 255, 0.87) !important' },
	'.text-muted-white': { color: 'rgba(255, 255, 255, 0.54) !important' },
	'.text-light-white': { color: 'rgba(255, 255, 255, 0.54) !important' },
	'.text-muted': { color: 'var(--text-muted) !important' },
	'.text-hint': { color: 'var(--text-hint) !important' },
	'.text-gray': { color: 'rgba(0, 0, 0, 0.74) !important' },
	'.text-brand': { color: 'rgba(var(--primary), 1) !important' },
	'.text-primary': { color: 'rgba(var(--primary), 1) !important' },
	'.text-secondary': { color: 'rgba(var(--secondary), 1) !important' },
	'.text-green': { color: '#08ad6c !important' },
	'.text-error': { color: 'rgba(var(--error), 1) !important' },
	'.gray-on-hover': { transition: 'background 250ms ease' },
	'.gray-on-hover:hover': { background: 'rgba(0, 0, 0, 0.054)' },
	'.border-color-white': { borderColor: '#ffffff !important' },
	'.border-color-default': { borderColor: 'var(--bg-default) !important' },
	'.border-color-paper': { borderColor: 'var(--bg-paper) !important' }
};
