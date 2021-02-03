import React from 'react'

const Footer = () => {


    return (
        <footer
            style={{minHeight:"40vh"}}
            className="
            flex
            p-20
            bg-gray-700
            text-white text-opacity-70
            "
        >

            <div className="flex-1">
                <p>
                HULSE DENTAL<br/>
                1840 EAST MAIN STREET<br/>
                ONALASKA, WI 54650<br/>
                (608) 783-1306<br/>
                KURTHULSEDENTAL@GMAIL.COM
                </p>

            </div>
            <div className="flex-1">
                <table className="w-9/12">
                    <tr><td>Monday</td><td>8am to 5pm</td></tr>
                    <tr><td>Tuesday</td><td>8am to 5pm</td></tr>
                    <tr><td>Wednesday</td><td>8am to 5pm</td></tr>
                    <tr><td>Thursday</td><td>8am to 5pm</td></tr>
                    <tr><td>Friday</td><td>8am to 12pm</td></tr>
                    <tr><td>Saturday</td><td>closed</td></tr>
                    <tr><td>Sunday</td><td>closed</td></tr>
                </table>
            </div>
            <div className="flex-1">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.752720569731!2d-91.21119054867037!3d43.88167474554138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87feacca4493f169%3A0x8f5c2bbda8cce7f8!2sHulse%20Dental!5e0!3m2!1sen!2sus!4v1601947835391!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                ></iframe>
            </div>
            



             {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> */}

        </footer>
    )
}

export default Footer