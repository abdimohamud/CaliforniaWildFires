import { dsv } from 'd3-fetch';
import moment from 'moment';

  
    

  dsv(",", './California_Fire_Incidents.csv', (d) => {
  return {
    AcresBurned:+d['AcresBurned'],
    AdminUnit:d['AdminUnit'],
    ArchiveYear:+d['ArchiveYear'],
    CalFireIncident:d['CalFireIncident'],
    CanonicalUrl:d['CanonicalUrl'],
    Counties:d['Counties'],
    CountyIds:+d['CountyIds'],
    Extinguished:+d['Extinguished'],
    Latitude:+d['Latitude'],
    Location:+d['Location'],
    Longitude:+d['Longitude'],
    MajorIncident:d['MajorIncident'],
    Name:d['Name'],
    Started:+d['Started'],
    UniqueId:+d['UniqueId'],
  };
});