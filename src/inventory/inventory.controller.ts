import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { createInventoryDto } from './dtos/createInventoryDto.dto';
import { UpdateInventoryDto } from './dtos/updateInventoryDto.dto';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(
        private service: InventoryService
    )
    {}

    @MessagePattern({ cmd: 'create-inventory'})
    createInventory(data: createInventoryDto) {
        return this.service.handleCreateInventory(data);
    }

    @MessagePattern({ cmd: 'get-inventories'})
    getInventories() {
        return this.service.handleGetInventories();
    }

    @MessagePattern({ cmd: 'update-inventory'})
    updateInventory(data: UpdateInventoryDto) {
        return this.service.handleUpdateInventory(data);
    }

    @MessagePattern({ cmd: 'delete-inventory'})
    deleteInventory(id: string) {
        return this.service.handleDeleteInventory(id);
    }
}
