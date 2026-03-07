
const map = L.map('map').setView([70, 0], 3);

/* L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); */


L.tileLayer('./Img/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 5,
    noWrap: true,
    attribution: '© RogueRBK'
}).addTo(map);

var RecolectaIcon = L.icon({
    iconUrl: './Img/Recolecta.png',
    iconSize: [25, 41]
});

var ProcesoIcon = L.icon({
    iconUrl: './Img/Proceso.png',
    iconSize: [25, 41]
});

var marker = L.marker([68.2, -45], { icon: RecolectaIcon })
    .addTo(map)
    .bindPopup('<b>RECOLECTA<br>META</b><BR>CP 1085')
    /*     .on('click', function (e) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de META tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.')
        }); */
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de META tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });
var marker = L.marker([70, -77], { icon: RecolectaIcon })
    .addTo(map)
    .bindPopup('<b>RECOLECTA<br>TUSSI</b><BR>CP ISLA ENTRE 1104 Y 1106')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de TUSSI tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([72, -35.5], { icon: ProcesoIcon })
    .addTo(map)
    .bindPopup('<b>PROCESO<br>EXTASIS</b><BR>CP 1082')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en proceso de EXTASIS tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([78.6, -13.5], { icon: ProcesoIcon })
    .addTo(map)
    .bindPopup('<b>PROCESO<br>COCA</b><BR>CP 1025')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en proceso de COCA tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

    var marker = L.marker([79.5, -16.5], { icon: ProcesoIcon })
    .addTo(map)
    .bindPopup('<b>PROCESO<br>KETAMINA</b><BR>CP 1051')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en proceso de KETAMINA tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([82, -7.5], { icon: RecolectaIcon })
    .addTo(map)
    .bindPopup('<b>RECOLECTA<br>KETAMINA</b><BR>CP BAHIA DE PALETO')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de KETAMINA tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([74.3, 56], { icon: RecolectaIcon })
    .addTo(map)
    .bindPopup('<b>RECOLECTA<br>AMAPOLA</b><BR>CP ENTRE PUNTO H e I')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de AMAPOLA tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([70.1, 89.5], { icon: RecolectaIcon })
    .addTo(map)
    .bindPopup('<b>RECOLECTA<br>COCA</b><BR>CP 2057')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de COCA tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([68.5, 54], { icon: RecolectaIcon })
    .addTo(map)
    .bindPopup('<b>RECOLECTA<br>COCA ROSA</b><BR>CP 2026')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de COCA ROSA tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([60, 30], { icon: ProcesoIcon })
    .addTo(map)
    .bindPopup('<b>PROCESO<br>COCA ROSA</b><BR>CP SUR MONTE CHILLIAD')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en proceso de COCA ROSA tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([59, -1], { icon: RecolectaIcon })
    .addTo(map)
    .bindPopup('<b>RECOLECTA<br>DIVINORUM</b><BR>CP SUR MONTE CHILLIAD')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de DIVINORUM tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([49, -7.2], { icon: ProcesoIcon })
    .addTo(map)
    .bindPopup('<b>PROCESO<br>OPIO</b><BR>CP 3034')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en proceso de OPIO tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([48.2, 16.5], { icon: ProcesoIcon })
    .addTo(map)
    .bindPopup('<b>PROCESO<br>CRACK</b><BR>CP 3029')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en proceso de CRACK tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([47, 30.8], { icon: ProcesoIcon })
    .addTo(map)
    .bindPopup('<b>PROCESO<br>HONGO</b><BR>CP 3026')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en proceso de OPIO tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([51, 48], { icon: ProcesoIcon })
    .addTo(map)
    .bindPopup('<b>PROCESO<br>DIVINORUM</b><BR>CP 3009')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en proceso de DIVINORUM tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([40.5, 41.5], { icon: ProcesoIcon })
    .addTo(map)
    .bindPopup('<b>PROCESO<br>META/b><BR>CP 3037')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en proceso de META tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([27.7, 77.7], { icon: RecolectaIcon })
    .addTo(map)
    .bindPopup('<b>RECOLECTA<br>MARIHUANA</b><BR>CP 3054')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de MARIHUANA tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });

var marker = L.marker([22, 95], { icon: RecolectaIcon })
    .addTo(map)
    .bindPopup('<b>RECOLECTA<br>SD</b><BR>CP ISLA AL ESTE DE 3055')
    .on('click', function (e) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('/army comunica a los que están en recolecta de SD tienen 7 segundos para levantar las manos, por favor acatar orden o serán tomados como sospechosos y se abrirá fuego.').then(function () {
                console.log('Texto copiado al portapapeles');
                e.target.bindTooltip('Copiado!', { permanent: false, direction: 'bottom', offset: [0, 30] })
                    .openTooltip();
            }).catch(function (err) {
                console.error('Error al copiar el texto: ', err);
            });
        }
        else {
            console.log('El CopyAPI no es compatible con este navegador.');
        }
    });