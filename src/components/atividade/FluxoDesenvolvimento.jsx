import React from "react";

import Planejamento from './Planejamento';

import { TabView, TabPanel } from "primereact/tabview";

export default function FluxoDesenvolvimento(props) {
  return (
    <>
      <TabView>
        <TabPanel header="Planejamento do grupo">
            <Planejamento></Planejamento>
        </TabPanel>
        <TabPanel header="Divisão de tarefas">Content II</TabPanel>
        <TabPanel header="Planejamento individual">Content III</TabPanel>
        <TabPanel header="Editor">Content III</TabPanel>
      </TabView>
    </>
  );
}
