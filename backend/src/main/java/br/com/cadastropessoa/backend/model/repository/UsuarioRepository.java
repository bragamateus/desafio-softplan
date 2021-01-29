package br.com.cadastropessoa.backend.model.repository;

import br.com.cadastropessoa.backend.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
