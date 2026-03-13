
namespace cars;

entity Makers {
 key ID : Integer;
 name   : String;
 country: String;
}

entity Cars {
 key ID : Integer;
 model  : String;
 maker  : Association to Makers;
 price  : Decimal(9,2);
 electric : Boolean;
 stock : Integer;
}
