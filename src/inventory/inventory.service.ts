import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory, InventoryDocument } from './inventory.model';

@Injectable()
export class InventoryService {
    constructor(
        @InjectModel(Inventory.name) private readonly inventoryModel: Model<InventoryDocument>
    )
    {}

    async handleCreateInventory(data: any) {
        try {
            return await this.inventoryModel.create({
                ...data,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

    async handleGetInventories() {
        try {

            return await this.inventoryModel.find();
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

    async handleUpdateInventory(data: any) {
        try {

            const inventory = await this.inventoryModel.findOne({ _id: data.id });
            if (!inventory) throw new Error('Inventory does not exist!')

            return await this.inventoryModel.findOneAndUpdate({ _id: data.id }, { $set: { name: data.name, qty: data.qty, description: data.description }});
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500);
        }
    }

    async handleDeleteInventory(id: string) {
        try {
            const inventory = await this.inventoryModel.findOne({ _id: id });
            if (!inventory) throw new Error('Inventory does not exist!')
            
            return await this.inventoryModel.findOneAndDelete({ _id: id });
            
        } catch (error) {
            Logger.error(error);
            if (error.name === 'TypeError') throw new HttpException(error.message, 500)
        }
    }
}
