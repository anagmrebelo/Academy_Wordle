interface HeaderProps {
	gameNb: number
}

export function Header({gameNb}: HeaderProps): JSX.Element {
	return (
		<>
		<h1 className="padding-20">Wordle</h1>
		<h2 className="padding-20">Game {gameNb} of the day!</h2>
		</>
	);
}