import { useState } from "react";
import "./index.css";
import TableBill from "../components/table/TableBill/TableBill";
import TableMenu from "../components/table/TableMenu/TableMenu";

const HomePage = () => {
  const [diskon] = useState<number>(500);
  const [totalPeserta] = useState<number>(26);

  const discountEach = Math.round(diskon / totalPeserta);

  return (
    <div className="container">
      <h1>Bayar Makan</h1>

      <div className="content">
        {/* Discount */}
        <div className="discount-page">
          <h3>Diskon: {diskon} Rb</h3>
          <p>Total Peserta: {totalPeserta} orang</p>
          <p>
            Total Diskon per orang:{" "}
            <span className="price-bold">{discountEach}</span> Rb
          </p>
        </div>

        {/* Menu */}
        <TableMenu />

        {/* Table */}
        <TableBill discountEach={discountEach} />
      </div>

      <div className="footer">
        <h2>
          Terimakasih kepada para donatur yang telah ikhlas menyisihkan
          rezekinya untuk acara ini,
          <br /> kami doakan panjang umur sehat selalu rezekinya semakin
          berlimpah.. Aamiin
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
