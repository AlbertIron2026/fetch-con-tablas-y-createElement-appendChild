package com.ironhack.cochesjpa1.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ironhack.cochesjpa1.DTO.MarcaModeloDTO;
import com.ironhack.cochesjpa1.Entity.Coche;
import com.ironhack.cochesjpa1.Repository.CocheRepositorio;

@Service
public class CocheServicio {
    // del repositorio de métodos de JPA, esta capa es la que dice cuáles usas
    // tiene que ver con la lógica del negocio, y tienes que preguntar al cliente
    // qué necesita que haga su aplicación
    // ejemplo basico ver todos/ ver uno por id/ añadir uno/ borrar uno por id
    // modificar por id es más complicado pero también se puede

    // lo primero es instanciar el repositorio. Para ello,
    // en vez de crear un constructor e instanciar, se usa el atajo @Autowired

    @Autowired
    private CocheRepositorio cocheRepositorioServicio;

    // luego ya puedes crear los metodos:

    // consultar todos: devuelve una lista de todos los coches
    public List<Coche> consultarCoches() {
        return (List<Coche>) cocheRepositorioServicio.findAll();
    }

    // para buscar uno por id
    // lo mismo usando el metodo JPA findById,
    // y recibiendo el id del coche a consultar
    // el tipo Optional nos permite devolver NULL
    public Optional<Coche> buscarPorId(Long id) {
        return cocheRepositorioServicio.findById(id);
    }

    // guardar un coche. retornas al JPA repository el coche que estas guardando
    public Coche registCoche(Coche coche) {
        return cocheRepositorioServicio.save(coche);
    }

    // borrar uno por id
    public void borrarCoche(Long id) {
        cocheRepositorioServicio.deleteById(id);
    }

    // servicios extras ejemplo marca y modelo
    // query native
    public List<Object[]> obtenerModeloYMarcaNative() {
        return cocheRepositorioServicio.obtenerModeloYMarcaNative();
    }

    // JPQL sin DTO
    public List<Object[]> obtenerModeloYMarcaJPQL() {
        return cocheRepositorioServicio.obtenerModeloYMarca();
    }

    // JPQL con DTO
    public MarcaModeloDTO obtenerMarcaModeloDTO(Long id) {
        return cocheRepositorioServicio.MarcaModeloDTO(id);
    }

}
