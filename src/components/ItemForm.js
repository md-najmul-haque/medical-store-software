import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemInfo from './ItemInfo';
import ItemPrice from './ItemPrice';
import ItemStock from './ItemStock';
import MedicineInfo from './MedicineInfo';
import Supplier from './Supplier';


const ItemForm = () => {

    return (
        <div className='container mx-auto'>
            <Tabs>
                <TabList className='flex border-none bg-gray-100'>
                    <Tab className='p-3 font-bold'>Item Info</Tab>
                    <Tab className='p-3 font-bold'>Item Price</Tab>
                    <Tab className='p-3 font-bold'>Item Stock</Tab>
                    <Tab className='p-3 font-bold'>Supplier</Tab>
                    <Tab className='p-3 font-bold'>Medicine Info</Tab>
                </TabList>

                <TabPanel>
                    <ItemInfo />
                </TabPanel>
                <TabPanel>
                    <ItemPrice />
                </TabPanel>
                <TabPanel>
                    <ItemStock />
                </TabPanel>
                <TabPanel>
                    <Supplier />
                </TabPanel>
                <TabPanel>
                    <MedicineInfo />
                </TabPanel>
            </Tabs>

        </div >
    );
};

export default ItemForm;