import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";


export const WrapperTabs = styled(Tabs)`

    font-size: 16px;
    width: 50%;

`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
    

`;

WrapperTabList.tabsRole = 'Tablist';

export const WrapperTab = styled(Tab)`

    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border 1px solid #ccc;
    padding: 16px;
    cursor: pointer;
    margin: 8px;
    
    background-color: #fff;
 
    &:focus{
        outline: none;
        
    }

    &.is-selected{
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        background-color: #ccc;
        
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`

    padding 8px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 0.3em rgba(0, 0, 0, 0.3);
    display: none;
    margin-top: -5px;
 

    &.is-selected{
        display: block;

    }
`;

WrapperTabPanel.tabsRole = "TabPanel";
