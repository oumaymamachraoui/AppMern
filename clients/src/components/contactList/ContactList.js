import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../JS/actions/Actions";
import ContactCard from "../contactCard/ContactCard";
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
  // const load = useSelector((state) => state.contactReducer.load);
  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  return (
    <div>
      {
        contacts.map((el) => <ContactCard contact={el} key={el._id} />)
      }
    </div>
  );
};

export default ContactList;
