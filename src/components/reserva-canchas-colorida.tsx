'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

export function ReservaCanchasColorida() {
  const [localidad, setLocalidad] = useState('');
  const [deporte, setDeporte] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const deportes = ['Fútbol', 'Básquet', 'Tenis', 'Vóley'];
  const canchasDisponibles = [
    { id: 1, nombre: 'Cancha Central', deporte: 'Fútbol', horario: '14:00 - 16:00', imagen: '/placeholder.svg?height=200&width=300' },
    { id: 2, nombre: 'Cancha 2', deporte: 'Básquet', horario: '16:00 - 18:00', imagen: '/placeholder.svg?height=200&width=300' },
    { id: 3, nombre: 'Cancha de Tenis', deporte: 'Tenis', horario: '18:00 - 20:00', imagen: '/placeholder.svg?height=200&width=300' },
  ];

  const deporteIconos = {
    Fútbol: '⚽',
    Básquet: '🏀',
    Tenis: '🎾',
    Vóley: '🏐',
  };

  return (
    <div className=" mx-auto px-4 py-8 bg-gradient-to-br from-primary/10 to-secondary/10 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Reserva de Canchas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="flex items-center space-x-2 bg-white rounded-lg p-2 shadow-md">
          <MapPin className="text-primary" />
          <Input
            type="text"
            placeholder="Localidad"
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
            className="border-none focus:ring-0"
          />
        </div>

        <Select onValueChange={setDeporte}>
          <SelectTrigger className="bg-white rounded-lg shadow-md">
            <SelectValue placeholder="Selecciona un deporte" />
          </SelectTrigger>
          <SelectContent>
            {deportes.map((dep) => (
              <SelectItem key={dep} value={dep}>
                <span className="mr-2">{deporteIconos[dep]}</span>
                {dep}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2 bg-white rounded-lg p-2 shadow-md">
          <Calendar className="text-primary" />
          <Input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="border-none focus:ring-0" />
        </div>

        <div className="flex items-center space-x-2 bg-white rounded-lg p-2 shadow-md">
          <Clock className="text-primary" />
          <Input type="time" value={hora} onChange={(e) => setHora(e.target.value)} className="border-none focus:ring-0" />
        </div>
      </div>

      <Button className="w-full mb-8 bg-primary hover:bg-primary/90 text-white">
        <Search className="mr-2 h-4 w-4" /> Buscar Canchas Disponibles
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {canchasDisponibles.map((cancha) => (
          <Card key={cancha.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={cancha.imagen} alt={cancha.nombre} className="w-full h-48 object-cover" />
            <CardHeader className="bg-secondary/10">
              <CardTitle className="flex items-center justify-between">
                <span>{cancha.nombre}</span>
                <span className="text-2xl">{deporteIconos[cancha.deporte]}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-muted-foreground mb-2 flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-primary" />
                {localidad || 'Ubicación no especificada'}
              </p>
              <p className="text-muted-foreground mb-4 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-primary" />
                {cancha.horario}
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Reservar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
