import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import * as GridFsStorage from 'multer-gridfs-storage';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GridFsMulterConfigService implements MulterOptionsFactory {

    gridFsStorage: GridFsStorage;

    constructor(private configService: ConfigService) {
        this.gridFsStorage = new GridFsStorage({
            url: this.configService.get<string>('DEV_DATABASE'),
            file: (req, file) => {
                return new Promise((resolve) => {
                    const filename = file.originalname.trim();
                    const fileInfo = {
                      filename: filename
                    };
                    resolve(fileInfo);
                });
              }
        });
    }

    createMulterOptions(): MulterModuleOptions {
        return {
            storage: this.gridFsStorage,
        };
    }
}