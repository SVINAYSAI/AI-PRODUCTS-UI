
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import Services from "./Services";


export default function Accordion() {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Company Information",
      children: <Services />,
    },
    // {
    //   key: "2",
    //   label: "Headquarters",
    //   children: <Headquarters />,
    // },
    // {
    //   key: "3",
    //   label: "Company Contact",
    //   children: <CompanyContact />,
    // },
    // {
    //   key: "4",
    //   label: "Ticket Settings",
    //   children: <TicketSettings />,
    // },
  ];
  return (
    <div className="container mt-10 mb-20">
      <Collapse
        accordion={false}
        defaultActiveKey={[""]}
        expandIconPosition={"end"}
        items={items}
      />
    </div>
  );
}