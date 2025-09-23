function Footer(){
    const year = new Date();
    return(
        <div>
            <p>&#169; {year.getFullYear()} Travel Info</p>
        </div>
    )
}

export default Footer;