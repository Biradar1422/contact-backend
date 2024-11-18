// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { getContacts, addContact, updateContact, deleteContact } = require('../controllers/contactController');

// GET all contacts
router.get('/', getContacts);

// POST a new contact
router.post('/', addContact);

// PUT (update) an existing contact
router.put('/:id', updateContact);

// DELETE a contact
router.delete('/:id', deleteContact);

module.exports = router;
