import Logo from "../assets/logo.jpeg";
export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="DailyTask Logo" />
            <span>DailyTask</span>
        </div>

        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark"></span>
            <span className="gOne"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>


        </div>
    </header>
  )
}
