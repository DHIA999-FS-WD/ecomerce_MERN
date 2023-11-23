import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call <br />
            we are vaialible from 8:00 AM to 8:00 PM
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@OnlineShop.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +999-999999999
          </p>
          <p className="mt-3">
            <BiSupport /> : 9999-9999-9999 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
