// controllers/contactController.js
const Contact = require('../models/Contact');

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error });
  }
};

// Add a new contact
const addContact = async (req, res) => {
  const { name, email, phone, user_id } = req.body;
  try {
    const newContact = new Contact({ name, email, phone, user_id });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'Error adding contact', error });
  }
};

// Update a contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, user_id } = req.body;
  try {
    const updatedContact = await Contact.findByIdAndUpdate(id, { name, email, phone, user_id }, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: 'Error updating contact', error });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contact', error });
  }
};

module.exports = { getContacts, addContact, updateContact, deleteContact };
