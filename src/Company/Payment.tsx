import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import UpiID from "./Pages/UpiID";
import QRCode from "./Pages/QRCide";
import CardPY from "./Pages/CardPY";

export default function Ticket() {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "UPI ID",
      children: <UpiID />,
    },
    {
      key: "2",
      label: "QR Code",
      children: <QRCode />,
    },
    {
      key: "3",
      label: "Card ( Creadit & Debit )",
      children: <CardPY />,
    },
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
