import express from 'express';
import { PrismaClient } from '@prisma/client';

const tracker = express();
const prisma = new PrismaClient();

tracker.use(express.json());

// Add a new item
tracker.post("/item", async (req, res) => {
    const { title, quantity, price } = req.body;
    console.log(req.body); 
    try {
        const newItem = await prisma.item.create({
            data: { title, quantity, price },
        });
        res.json(newItem);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: error.message }); 
    }
});

// Get all items
tracker.get('/items', async (req, res) => {
    try {
        const items = await prisma.item.findMany();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single item by ID
tracker.get('/item/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const item = await prisma.item.findUnique({
            where: { id: parseInt(id) },
        });
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an item by ID
tracker.put('/item/:id', async (req, res) => {
    const { id } = req.params;
    const { title, quantity, price } = req.body;
    try {
        const updatedItem = await prisma.item.update({
            where: { id: parseInt(id) },
            data: { title, quantity, price },
        });
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an item by ID
tracker.delete('/item/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.item.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

tracker.listen(3000, () => {
    console.log('Running on port 3000');
});
