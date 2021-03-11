window.onload = function () 
{
	var lat = 6.84743;
    var lon = 79.9216;

	map = L.map('srikithq').setView([lat, lon], 13);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup("<b>SriKIT</b><br />Elhena Road<br />Maharagama").openPopup();
}