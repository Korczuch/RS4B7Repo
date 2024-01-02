-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-01-02 17:09:00.646

-- tables
-- Table: Car
CREATE TABLE Car (
    VIN varchar2(17)  NOT NULL,
    CarType varchar2(5)  NOT NULL,
    ExteriorColor varchar2(30)  NOT NULL,
    InteriorColor varchar2(30)  NOT NULL,
    Ceramics integer  NOT NULL,
    Registration varchar2(15)  NOT NULL,
    CountryCurrent varchar2(20)  NOT NULL,
    CountryOrigin varchar2(20)  NOT NULL,
    AudiExclusiveInterior integer  NOT NULL,
    AudiExclusiveExterior integer  NOT NULL,
    CONSTRAINT Car_pk PRIMARY KEY (VIN)
) ;

-- Table: CarPhoto
CREATE TABLE CarPhoto (
    CarPhotoID integer  NOT NULL,
    Car_VIN varchar2(17)  NOT NULL,
    LinkPhoto varchar2(300)  NOT NULL,
    SequenceNumber integer  NOT NULL,
    CONSTRAINT CarPhoto_pk PRIMARY KEY (CarPhotoID)
) ;

-- Table: SaleHistory
CREATE TABLE SaleHistory (
    SaleID integer  NOT NULL,
    Car_VIN varchar2(17)  NOT NULL,
    CountrySale varchar2(20)  NOT NULL,
    Price number(7,2)  NOT NULL,
    CONSTRAINT SaleHistory_pk PRIMARY KEY (SaleID)
) ;

-- foreign keys
-- Reference: CarPhoto_Car (table: CarPhoto)
ALTER TABLE CarPhoto ADD CONSTRAINT CarPhoto_Car
    FOREIGN KEY (Car_VIN)
    REFERENCES Car (VIN);

-- Reference: SaleHistory_Car (table: SaleHistory)
ALTER TABLE SaleHistory ADD CONSTRAINT SaleHistory_Car
    FOREIGN KEY (Car_VIN)
    REFERENCES Car (VIN);

-- End of file.

