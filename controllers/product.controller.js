
exports.index = async (req, res) => {
    try {
        res.status(201).json({ message: 'Product Index Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Index Error', error: error.message });

    }
}
