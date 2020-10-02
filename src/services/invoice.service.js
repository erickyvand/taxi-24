import models from '../database/models';

const { Invoice, Trip } = models;

class InvoiceService {
	static createInvoice(object) {
		return Invoice.create(object);
	}

	static findInvoice(attribute) {
		return Invoice.findOne({ where: attribute, include: { model: Trip } });
	}
}

export default InvoiceService;
