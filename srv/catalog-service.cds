
using cars from '../db/schema';

service CatalogService {
 entity Makers as projection on cars.Makers;
 entity Cars   as projection on cars.Cars;
}
