import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
  ){}
  create(createVendorDto: CreateVendorDto) {
    return this.vendorRepository.create(createVendorDto)
  }

  findAll() {
    return this.vendorRepository.find();
  }

  findOne(id: number) {
    return this.vendorRepository.findOneBy({id})
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return this.vendorRepository.update(id, updateVendorDto)
  }

  remove(id: number) {
    return this.vendorRepository.delete(id)
  }
}
